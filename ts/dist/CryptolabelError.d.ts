import { Context } from './Context';
declare class CryptolabelError extends Error {
    isCryptolabelError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { CryptolabelError };
