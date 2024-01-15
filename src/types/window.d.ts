/// <reference types="vite/client" />

declare global {
  interface Window {
    MonacoEnvironment: {
      getWorker: (_: Window, label: string) => Worker;
    };
  }
}
