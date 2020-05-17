import {
  DocumentFormattingEditProvider, Position, Range, TextDocument,
  TextEdit, workspace, WorkspaceConfiguration, FormattingOptions, window
} from 'vscode';

import { promises as fs } from 'fs';
import { spawn, ChildProcess, SpawnOptions } from 'child_process';
import LoggingService from './LoggingService';
import { CancellationToken } from 'vscode-languageclient';
import { fullDocumentRange } from './utils';

import * as tmp from 'tmp';

class Formatter implements DocumentFormattingEditProvider {
  private loggingService: LoggingService;

  constructor(loggingService: LoggingService) {
    this.loggingService = loggingService;
  }

  // add filepath to the output message
  private addFilePathToMesssage(message: string, fileName: string): string {
    const lines = message.split('\n');
    if (lines.length > 0) {
      lines[0] = lines[0].replace(/(\d*):(\d*)/g, `${fileName}:$1:$2`);
      return lines.join('\n');
    }
    return message;
  }



  private async runFormatTool(document: TextDocument, token: CancellationToken): Promise<string> {
    let childP: ChildProcess;
    // tslint:disable-next-line: one-variable-per-declaration
    let _res, _rej;
    const result = new Promise<string>((res, rej) => {
      _res = res;
      _rej = rej;
    });
    const createFile = new Promise<{ path, cleanupCallback }>((res, rej) => {
      tmp.file({ keep: true }, (err, path, fd, cleanupCallback) => {
        if (err) rej(err);
        res({ path, cleanupCallback });
      });
    });
    const { path: tempFilePath, cleanupCallback: deleteTempFile } = await createFile;
    await fs.writeFile(tempFilePath, document.getText(), { encoding: 'utf-8' });
    childP = spawn('/home/anonymous/dev/vscode-qml/client/bin/qmljsreformatter', ['-s', tempFilePath, tempFilePath]);
    childP.on('exit', () => {
      fs.readFile(tempFilePath, { encoding: 'utf-8' }).then(rs => {
        _res(rs);
      }).catch(e => {
        deleteTempFile();
        _rej(e);
      });
    }).on('error', (c) => {
      deleteTempFile();
      _rej(c);
    });
    token.onCancellationRequested((e) => {
      childP.kill();
    });
    return result;
  }

  private async formatDocument(document: TextDocument, options: FormattingOptions, token: CancellationToken): Promise<string> {
    const rawDocumentText = document.getText();
    const { fileName } = document;
    try {
      const result = await this.runFormatTool(document, token);
      this.loggingService.addToOutput(`${fileName} : Formatted Successfully`);
      return result;
    } catch (err) {
      this.loggingService.addToOutput(this.addFilePathToMesssage(err.message, fileName));
      return rawDocumentText;
    }
  }

  public async provideDocumentFormattingEdits(document: TextDocument, options: FormattingOptions, token: CancellationToken): Promise<TextEdit[]> {
    const formattedDocument = await this.formatDocument(document, options, token);
    return [TextEdit.replace(fullDocumentRange(document), formattedDocument)];
  }
}

export default Formatter;
