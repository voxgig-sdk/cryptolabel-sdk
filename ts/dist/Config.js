"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const TestFeature_1 = require("./feature/test/TestFeature");
const FEATURE_CLASS = {
    test: TestFeature_1.TestFeature,
};
// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        // TODO: errors etc
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'Cryptolabel',
        slug: "cryptolabel",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        test: {
            "options": {
                "active": false
            },
            "transport": "base"
        },
    };
    options = {
        base: "https://cryptolabel.io/api/v1",
        headers: {
            "content-type": "application/json"
        },
        entity: {
            address: {},
        }
    };
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
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map