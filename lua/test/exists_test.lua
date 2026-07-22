-- Cryptolabel SDK exists test

local sdk = require("cryptolabel_sdk")

describe("CryptolabelSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
