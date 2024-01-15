import type { HostObjectAsyncProxy } from '@/types/webview2';

interface InstructionController extends HostObjectAsyncProxy {
  GetLDInstructions(): Promise<string>;
}

export const instructionController = window.chrome.webview.hostObjects
  .instructionController as InstructionController;
