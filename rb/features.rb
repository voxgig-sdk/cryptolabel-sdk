# Cryptolabel SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module CryptolabelFeatures
  def self.make_feature(name)
    case name
    when "base"
      CryptolabelBaseFeature.new
    when "test"
      CryptolabelTestFeature.new
    else
      CryptolabelBaseFeature.new
    end
  end
end
