
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

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
     test:     {
      "options": {
        "active": false
      },
      "transport": "base"
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
              "parts": [
                "address",
                "{chain}",
                "{address}"
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
              }
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
  config
}

