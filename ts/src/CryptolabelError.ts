
import { Context } from './Context'


class CryptolabelError extends Error {

  isCryptolabelError = true

  sdk = 'Cryptolabel'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  CryptolabelError
}

