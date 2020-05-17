import { commands, Disposable, OutputChannel, window } from 'vscode';


import { EXTENSION_NAME, EXTENSION_TITLE } from './utils';

class LoggingService {
  private outputChannel: OutputChannel;

  constructor() {
    this.outputChannel = window.createOutputChannel(EXTENSION_TITLE);
  }

  // add message to the output channel
  public addToOutput(message: string): void {
    const title = `${new Date().toLocaleString()}:`;

    // Create a sort of title, to differentiate between messages
    this.outputChannel.appendLine(title);
    this.outputChannel.appendLine('-'.repeat(title.length));

    // Append actual output
    this.outputChannel.appendLine(`${message}\n`);
  }

}

export default LoggingService;
