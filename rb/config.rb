# Cryptolabel SDK configuration

module CryptolabelConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "Cryptolabel",
        "slug" => "cryptolabel",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "ratelimit" => {
          "options" => {
            "active" => false,
            "burst" => 5,
            "rate" => 5,
          },
          "optspec" => {
            "now" => "`$FUNCTION`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "retry" => {
          "options" => {
            "active" => false,
            "factor" => 2,
            "maxDelay" => 2000,
            "minDelay" => 50,
            "retries" => 2,
            "statuses" => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          },
          "optspec" => {
            "jitter" => "`$BOOLEAN`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "test" => {
          "options" => {
            "active" => false,
          },
          "optspec" => {
            "entity" => "`$MAP`",
            "net" => "`$MAP`",
          },
          "strict" => false,
          "transport" => "base",
        },
        "timeout" => {
          "options" => {
            "active" => false,
            "ms" => 30000,
          },
          "optspec" => {
            "clearTimer" => "`$FUNCTION`",
            "setTimer" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
      },
      "options" => {
        "base" => "https://cryptolabel.io/api/v1",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "address" => {},
        },
      },
      "entity" => {
        "address" => {
          "fields" => [
            {
              "name" => "address",
              "req" => true,
              "type" => "`$OBJECT`",
            },
            {
              "name" => "entity",
              "req" => true,
              "type" => "`$OBJECT`",
            },
            {
              "name" => "id",
              "type" => "`$STRING`",
            },
            {
              "name" => "labels",
              "req" => true,
              "type" => "`$ARRAY`",
            },
            {
              "name" => "query",
              "req" => true,
              "type" => "`$OBJECT`",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
            "parts" => [
              "chain",
              "address",
            ],
            "sep" => "/",
          },
          "name" => "address",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "header" => [
                      {
                        "example" => "application/json",
                        "kind" => "header",
                        "name" => "accept",
                        "orig" => "accept",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "header",
                        "name" => "user_agent",
                        "orig" => "user_agent",
                        "type" => "`$STRING`",
                      },
                    ],
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "address",
                        "orig" => "address",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "param",
                        "name" => "chain",
                        "orig" => "chain",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/address/{chain}/{address}",
                  "segments" => [
                    {
                      "lit" => "address",
                    },
                    {
                      "var" => "chain",
                    },
                    {
                      "var" => "address",
                    },
                  ],
                  "select" => {
                    "exist" => [
                      "accept",
                      "address",
                      "chain",
                      "user_agent",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.address`",
                  },
                  "parts" => [
                    "address",
                    "{chain}",
                    "{address}",
                  ],
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [
              [
                "address",
              ],
            ],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    CryptolabelFeatures.make_feature(name)
  end
end
