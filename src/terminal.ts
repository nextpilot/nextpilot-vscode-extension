
import * as vscode from 'vscode';
import * as path from 'path';
import { getExtensionPath } from './utils';

let _terminal: vscode.Terminal | undefined;

export function initTerminal() {
    let terminal = vscode.window.activeTerminal;
    if(terminal){
        _terminal = terminal;
        let name = "NextPilot";
        vscode.commands.executeCommand("workbench.action.terminal.renameWithArg", { name });
    }
}

export function getTerminal(): vscode.Terminal | undefined {
    if (!_terminal) {
        let extsionPath = getExtensionPath();
        if (extsionPath) {
            let iconPath = vscode.Uri.file(path.join(extsionPath));
            const options: vscode.TerminalOptions = {
                name: "NextPilot",
                iconPath: iconPath,
                message: "`\x1b[0;32mWelcome to NextPilot Build Terminal\x1b[0m`"
            };
            _terminal = vscode.window.createTerminal(options);
        }

    }

    return _terminal;
}

export function execCommand(command: string) {
    let terminal = getTerminal();
    if (terminal) {
        terminal.show();
        terminal.sendText(command, true);
    }
}

export function resetTerminal() {
    _terminal = undefined;
}


// export default class NextpilotTerminal{
//   _instance : vscode.Terminal | undefined = undefined;

// }
