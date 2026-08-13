# Cryptolabel SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

CryptolabelUtility.registrar = ->(u) {
  u.clean = CryptolabelUtilities::Clean
  u.done = CryptolabelUtilities::Done
  u.make_error = CryptolabelUtilities::MakeError
  u.feature_add = CryptolabelUtilities::FeatureAdd
  u.feature_hook = CryptolabelUtilities::FeatureHook
  u.feature_init = CryptolabelUtilities::FeatureInit
  u.fetcher = CryptolabelUtilities::Fetcher
  u.make_fetch_def = CryptolabelUtilities::MakeFetchDef
  u.make_context = CryptolabelUtilities::MakeContext
  u.make_options = CryptolabelUtilities::MakeOptions
  u.make_request = CryptolabelUtilities::MakeRequest
  u.make_response = CryptolabelUtilities::MakeResponse
  u.make_result = CryptolabelUtilities::MakeResult
  u.make_point = CryptolabelUtilities::MakePoint
  u.make_spec = CryptolabelUtilities::MakeSpec
  u.make_url = CryptolabelUtilities::MakeUrl
  u.param = CryptolabelUtilities::Param
  u.prepare_auth = CryptolabelUtilities::PrepareAuth
  u.prepare_body = CryptolabelUtilities::PrepareBody
  u.prepare_headers = CryptolabelUtilities::PrepareHeaders
  u.prepare_method = CryptolabelUtilities::PrepareMethod
  u.prepare_params = CryptolabelUtilities::PrepareParams
  u.prepare_path = CryptolabelUtilities::PreparePath
  u.prepare_query = CryptolabelUtilities::PrepareQuery
  u.graphql_body = CryptolabelUtilities::GraphqlBody
  u.graphql_errors = CryptolabelUtilities::GraphqlErrors
  u.result_basic = CryptolabelUtilities::ResultBasic
  u.result_body = CryptolabelUtilities::ResultBody
  u.result_headers = CryptolabelUtilities::ResultHeaders
  u.transform_request = CryptolabelUtilities::TransformRequest
  u.transform_response = CryptolabelUtilities::TransformResponse
}
