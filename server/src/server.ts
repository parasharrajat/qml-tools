import {
	createConnection,
	TextDocuments,
	Diagnostic,
	DiagnosticSeverity,
	ProposedFeatures,
	InitializeParams,
	DidChangeConfigurationNotification,
	CompletionItem,
	CompletionItemKind,
	TextDocumentPositionParams,
	TextDocumentSyncKind,
	InitializeResult,
	DocumentFormattingParams,
	HandlerResult,
	TextEdit,
	Range,
	Position,
} from 'vscode-languageserver';

import {
	TextDocument,
} from 'vscode-languageserver-textdocument';

import { promisify, debuglog } from 'util';
import { spawn } from 'child_process';
import { resolve, dirname } from 'path';
import { parse } from 'url';
const execP = promisify(spawn);

const connection = createConnection(ProposedFeatures.all);

connection.onInitialize((params: InitializeParams) => {
	const result: InitializeResult = {
		capabilities: {
			documentFormattingProvider: true,
			textDocumentSync: TextDocumentSyncKind.Incremental,
		}
	};
	return result;
});

connection.onDocumentFormatting((params: DocumentFormattingParams): HandlerResult<TextEdit[], void> => {
	const docUrl = parse(params.textDocument.uri).pathname;

	return new Promise((res, rej) => {
		execP('/home/anonymous/dev/vscode-qml/server/bin/qmljsreformatter', ['-s', docUrl, '/dev/stdout'], {}).then((result) => {
			connection.console.log(JSON.stringify(result));
			const textEdit: TextEdit = {
				newText: 'stdout',
				range: Range.create(Position.create(0, 0), document.positionAt(-1))
			};
			res([textEdit]);
		}).catch(err => {
			connection.console.log(err.message);

			rej(err);
		})
	});
});


// Listen on the connection
connection.listen();
