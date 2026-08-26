# Cryptolabel SDK configuration


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "Cryptolabel",
            "slug": "cryptolabel",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
        "transport": "base",
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
            "name": "address",
            "req": True,
            "type": "`$OBJECT`",
          },
          {
            "name": "entity",
            "req": True,
            "type": "`$OBJECT`",
          },
          {
            "name": "labels",
            "req": True,
            "type": "`$ARRAY`",
          },
          {
            "name": "query",
            "req": True,
            "type": "`$OBJECT`",
          },
        ],
        "name": "address",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "header": [
                    {
                      "example": "application/json",
                      "kind": "header",
                      "name": "accept",
                      "orig": "accept",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "header",
                      "name": "user_agent",
                      "orig": "user_agent",
                      "type": "`$STRING`",
                    },
                  ],
                  "params": [
                    {
                      "kind": "param",
                      "name": "address",
                      "orig": "address",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "param",
                      "name": "chain",
                      "orig": "chain",
                      "reqd": True,
                      "type": "`$STRING`",
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
              },
            ],
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
