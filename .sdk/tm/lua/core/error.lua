-- Cryptolabel SDK error

local CryptolabelError = {}
CryptolabelError.__index = CryptolabelError


function CryptolabelError.new(code, msg, ctx)
  local self = setmetatable({}, CryptolabelError)
  self.is_sdk_error = true
  self.sdk = "Cryptolabel"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function CryptolabelError:error()
  return self.msg
end


function CryptolabelError:__tostring()
  return self.msg
end


return CryptolabelError
