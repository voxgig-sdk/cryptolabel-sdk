# Cryptolabel SDK utility: make_context
require_relative '../core/context'
module CryptolabelUtilities
  MakeContext = ->(ctxmap, basectx) {
    CryptolabelContext.new(ctxmap, basectx)
  }
end
