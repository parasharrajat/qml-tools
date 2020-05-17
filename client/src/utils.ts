import { extensions, TextDocument, Range, Position } from 'vscode';
import { camelCase } from 'lodash';

/**
 * @returns {string} package version
 */
function getExtensionVersion(): string | null {
  const extension = extensions.getExtension(`parasharrajat.${EXTENSION_NAME}`);
  if (extension && extension.packageJSON) {
    return extension.packageJSON.version;
  }
  return null;
}
function fullDocumentRange(document: TextDocument): Range {
  const rangeStart: Position = document.lineAt(0).range.start;
  const rangeEnd: Position = document.lineAt(document.lineCount - 1).range.end;
  return new Range(rangeStart, rangeEnd);
}

const languageId = 'qml';
const EXTENSION_TITLE = 'QML Tools';
const EXTENSION_NAME = 'qml_tools';
const EXTENSION_COMMAND_TITLE = camelCase(EXTENSION_TITLE);
const EXTENSION_VERSION: string | null = getExtensionVersion();

export {
  EXTENSION_NAME,
  EXTENSION_VERSION,
  EXTENSION_TITLE,
  EXTENSION_COMMAND_TITLE,
  languageId,
  fullDocumentRange
};
