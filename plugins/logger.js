const vLog = {
  log: (...msg) => console.log('👉', msg, '\n👈'),
  login: (...msg) => console.log('👉', ...msg),
  logln: (...msg) => console.log('👉', ...msg, '👈'),
  warn: (...msg) => console.warn('‼', msg, '\n👈'),
  error: (...msg) => console.error('❌', msg, '\n👈'),
  debug: (...msg) => console.debug('🕛', msg, '\n👈'),
}
export const vlog = vLog.log
export const vlogWarning = vLog.warn
export const vlogError = vLog.error
export const vlogDebug = vLog.debug

export default vLog

/** Console
 * assert(condition?: boolean, ...data: any[]): void;
 * clear(): void;
 * count(label?: string): void;
 * countReset(label?: string): void;
 * debug(...data: any[]): void;
 * dir(item?: any, options?: any): void;
 * dirxml(...data: any[]): void;
 * error(...data: any[]): void;
 * exception(message?: string, ...optionalParams: any[]): void;
 * group(...data: any[]): void;
 * groupCollapsed(...data: any[]): void;
 * groupEnd(): void;
 * info(...data: any[]): void;
 * log(...data: any[]): void;
 * table(tabularData?: any, properties?: string[]): void;
 * time(label?: string): void;
 * timeEnd(label?: string): void;
 * timeLog(label?: string, ...data: any[]): void;
 * timeStamp(label?: string): void;
 * trace(...data: any[]): void;
 * warn(...data: any[]): void;
 */
