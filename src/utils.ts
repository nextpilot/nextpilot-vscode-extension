
import * as vscode from 'vscode';

export function getExtensionPath() {
    return vscode.extensions.getExtension("NextPilot.nextpilot-vscode-extension")?.extensionPath;
}