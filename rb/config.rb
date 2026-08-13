# Cryptolabel SDK configuration

module CryptolabelConfig
  def self.make_config
    {
      "main" => {
        "name" => "Cryptolabel",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
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
              "active" => true,
              "name" => "category",
              "req" => true,
              "type" => "`$STRING`",
              "index$" => 0,
            },
            {
              "active" => true,
              "name" => "method",
              "req" => true,
              "type" => "`$STRING`",
              "index$" => 1,
            },
            {
              "active" => true,
              "name" => "readableCategory",
              "req" => true,
              "type" => "`$STRING`",
              "index$" => 2,
            },
            {
              "active" => true,
              "name" => "readableMethod",
              "req" => true,
              "type" => "`$STRING`",
              "index$" => 3,
            },
            {
              "active" => true,
              "name" => "readableSourceType",
              "req" => true,
              "type" => "`$STRING`",
              "index$" => 4,
            },
            {
              "active" => true,
              "name" => "readableStatus",
              "req" => true,
              "type" => "`$STRING`",
              "index$" => 5,
            },
            {
              "active" => true,
              "name" => "readableType",
              "req" => true,
              "type" => "`$STRING`",
              "index$" => 6,
            },
            {
              "active" => true,
              "name" => "sourceType",
              "req" => true,
              "type" => "`$STRING`",
              "index$" => 7,
            },
            {
              "active" => true,
              "name" => "status",
              "req" => true,
              "type" => "`$STRING`",
              "index$" => 8,
            },
            {
              "active" => true,
              "name" => "type",
              "req" => true,
              "type" => "`$STRING`",
              "index$" => 9,
            },
          ],
          "name" => "address",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "active" => true,
                  "args" => {
                    "header" => [
                      {
                        "active" => true,
                        "example" => "application/json",
                        "kind" => "header",
                        "name" => "accept",
                        "orig" => "accept",
                        "reqd" => false,
                        "type" => "`$STRING`",
                      },
                      {
                        "active" => true,
                        "kind" => "header",
                        "name" => "user_agent",
                        "orig" => "user_agent",
                        "reqd" => false,
                        "type" => "`$STRING`",
                      },
                    ],
                    "params" => [
                      {
                        "active" => true,
                        "kind" => "param",
                        "name" => "address",
                        "orig" => "address",
                        "reqd" => true,
                        "type" => "`$STRING`",
                        "index$" => 0,
                      },
                      {
                        "active" => true,
                        "kind" => "param",
                        "name" => "chain",
                        "orig" => "chain",
                        "reqd" => true,
                        "type" => "`$STRING`",
                        "index$" => 1,
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/address/{chain}/{address}",
                  "parts" => [
                    "address",
                    "{chain}",
                    "{address}",
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
                  "index$" => 0,
                },
              ],
              "key$" => "list",
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
