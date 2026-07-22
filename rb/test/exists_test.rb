# Cryptolabel SDK exists test

require "minitest/autorun"
require_relative "../Cryptolabel_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = CryptolabelSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
