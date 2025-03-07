// Polyfill para global
(window as any).global = window;

// Polyfill para Buffer
import { Buffer } from 'buffer';
(window as any).Buffer = Buffer;
