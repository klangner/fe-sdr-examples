/* tslint:disable */
/* eslint-disable */
/**
*/
export function futuresdr_init(): void;
/**
* @param {string} id
* @param {string} url
* @param {number} block
* @param {number} callback
* @param {number} min
* @param {number} max
* @param {number} step
*/
export function add_slider_u32(id: string, url: string, block: number, callback: number, min: number, max: number, step: number): void;
/**
* @param {string} id
* @param {string} url
*/
export function add_freq(id: string, url: string): void;
/**
* @param {string} id
* @param {string} url
*/
export function add_time(id: string, url: string): void;
/**
* @param {string} id
*/
export function app(id: string): void;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly futuresdr_init: () => void;
  readonly add_slider_u32: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number) => void;
  readonly add_freq: (a: number, b: number, c: number, d: number) => void;
  readonly add_time: (a: number, b: number, c: number, d: number) => void;
  readonly app: (a: number, b: number) => void;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
  readonly __wbindgen_export_2: WebAssembly.Table;
  readonly _dyn_core__ops__function__FnMut___A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h4e250b211f066428: (a: number, b: number, c: number) => void;
  readonly _dyn_core__ops__function__FnMut___A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hc25166a13d4c5f91: (a: number, b: number, c: number) => void;
  readonly _dyn_core__ops__function__Fn__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h4ba6ba2606684171: (a: number, b: number, c: number) => void;
  readonly _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hf5af30e444bfda90: (a: number, b: number, c: number) => void;
  readonly __wbindgen_free: (a: number, b: number) => void;
  readonly __wbindgen_exn_store: (a: number) => void;
  readonly __wbindgen_start: () => void;
}

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
