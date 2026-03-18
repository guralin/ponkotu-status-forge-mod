declare const socketlib: {
  registerModule(moduleId: string): SocketlibSocket;
};

interface SocketlibSocket {
  register(name: string, handler: (...args: unknown[]) => unknown): void;
  executeAsGM<T>(name: string, ...args: unknown[]): Promise<T>;
}
