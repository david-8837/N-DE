/**
 * Minimal Web Serial typings.
 * The DOM lib does not ship them yet, and the previous `any` casts hid real
 * mistakes at the port boundary.
 */

export interface SerialPortFilter {
  usbVendorId?: number;
  usbProductId?: number;
}

export interface SerialOptions {
  baudRate: number;
  dataBits?: 7 | 8;
  stopBits?: 1 | 2;
  parity?: 'none' | 'even' | 'odd';
  bufferSize?: number;
  flowControl?: 'none' | 'hardware';
}

export interface SerialPortInfo {
  usbVendorId?: number;
  usbProductId?: number;
}

export interface SerialPortLike {
  readonly readable: ReadableStream<Uint8Array> | null;
  readonly writable: WritableStream<BufferSource> | null;
  open(options: SerialOptions): Promise<void>;
  close(): Promise<void>;
  forget?(): Promise<void>;
  getInfo?(): SerialPortInfo;
}

export interface SerialApi {
  requestPort(options?: { filters?: SerialPortFilter[] }): Promise<SerialPortLike>;
  getPorts(): Promise<SerialPortLike[]>;
  addEventListener(
    type: 'connect' | 'disconnect',
    listener: (event: Event & { target: SerialPortLike }) => void
  ): void;
  removeEventListener(
    type: 'connect' | 'disconnect',
    listener: (event: Event & { target: SerialPortLike }) => void
  ): void;
}

export function getSerialApi(): SerialApi | null {
  if (typeof navigator === 'undefined') return null;
  const candidate = (navigator as Navigator & { serial?: SerialApi }).serial;
  return candidate ?? null;
}

export function isSerialSupported(): boolean {
  return getSerialApi() !== null;
}
