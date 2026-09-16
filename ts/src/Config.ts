
import { BaseFeature } from './feature/base/BaseFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'Cryptolabel',
        slug: "cryptolabel",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     ratelimit:     {
      "options": {
        "active": false,
        "burst": 5,
        "rate": 5
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 retry:     {
      "options": {
        "active": false,
        "factor": 2,
        "maxDelay": 2000,
        "minDelay": 50,
        "retries": 2,
        "statuses": [
          408,
          425,
          429,
          500,
          502,
          503,
          504
        ]
      },
      "optspec": {
        "jitter": "`$BOOLEAN`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },
 timeout:     {
      "options": {
        "active": false,
        "ms": 30000
      },
      "optspec": {
        "clearTimer": "`$FUNCTION`",
        "setTimer": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },

  }


  options = {
    base: "https://cryptolabel.io/api/v1",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      address: {
      },

    }
  }


  entity = {
    "address": {
      "fields": [
        {
          "name": "address",
          "req": true,
          "type": "`$OBJECT`"
        },
        {
          "name": "entity",
          "req": true,
          "type": "`$OBJECT`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "labels",
          "req": true,
          "type": "`$ARRAY`"
        },
        {
          "name": "query",
          "req": true,
          "type": "`$OBJECT`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id",
        "parts": [
          "chain",
          "address"
        ],
        "sep": "/"
      },
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
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "user_agent",
                    "orig": "user_agent",
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "kind": "param",
                    "name": "address",
                    "orig": "address",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "param",
                    "name": "chain",
                    "orig": "chain",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/address/{chain}/{address}",
              "segments": [
                {
                  "lit": "address"
                },
                {
                  "var": "chain"
                },
                {
                  "var": "address"
                }
              ],
              "select": {
                "exist": [
                  "accept",
                  "address",
                  "chain",
                  "user_agent"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.address`"
              },
              "parts": [
                "address",
                "{chain}",
                "{address}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "address"
          ]
        ]
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

