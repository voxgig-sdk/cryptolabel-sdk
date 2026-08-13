# Cryptolabel SDK configuration


def make_config():
    return {
        "main": {
            "name": "Cryptolabel",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://cryptolabel.io/api/v1",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "address": {},
            },
        },
        "entity": {
      "address": {
        "fields": [
          {
            "active": True,
            "name": "category",
            "req": True,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "method",
            "req": True,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "readableCategory",
            "req": True,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "readableMethod",
            "req": True,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "readableSourceType",
            "req": True,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "readableStatus",
            "req": True,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "readableType",
            "req": True,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "sourceType",
            "req": True,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "status",
            "req": True,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "type",
            "req": True,
            "type": "`$STRING`",
            "index$": 9,
          },
        ],
        "name": "address",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "header": [
                    {
                      "active": True,
                      "example": "application/json",
                      "kind": "header",
                      "name": "accept",
                      "orig": "accept",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "header",
                      "name": "user_agent",
                      "orig": "user_agent",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "address",
                      "orig": "address",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "chain",
                      "orig": "chain",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 1,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/address/{chain}/{address}",
                "parts": [
                  "address",
                  "{chain}",
                  "{address}",
                ],
                "select": {
                  "exist": [
                    "accept",
                    "address",
                    "chain",
                    "user_agent",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.address`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [
            [
              "address",
            ],
          ],
        },
      },
    },
    }
