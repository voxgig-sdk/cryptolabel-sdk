# Cryptolabel SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module CryptolabelFeatures
  def self.make_feature(name)
    case name
    when "base"
      CryptolabelBaseFeature.new
    when "ratelimit"
      CryptolabelRatelimitFeature.new
    when "retry"
      CryptolabelRetryFeature.new
    when "test"
      CryptolabelTestFeature.new
    when "timeout"
      CryptolabelTimeoutFeature.new
    else
      CryptolabelBaseFeature.new
    end
  end
end
