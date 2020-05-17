import { workspace, ExtensionContext, commands, OutputChannel, window, languages } from 'vscode';



import LoggingService from './LoggingService';
import { EXTENSION_COMMAND_TITLE, languageId } from './utils';
import Formatter from './FormatterProvider';



export function activate(context: ExtensionContext) {
  const formattter = new Formatter(new LoggingService());
  context.subscriptions.push(languages.registerDocumentFormattingEditProvider({
    language: languageId,
    scheme: 'file'
  }, formattter));

  // tslint:disable-next-line: no-empty
  const formatC = commands.registerTextEditorCommand(`${EXTENSION_COMMAND_TITLE}.format`, (editor, edit, ...a) => {
    // formattter.provideDocumentFormattingEdits()
  });
  context.subscriptions.push(formatC);

}

// tslint:disable-next-line: no-empty
export function deactivate() { }
