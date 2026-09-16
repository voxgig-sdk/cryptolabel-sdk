"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('AddressEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CRYPTOLABEL_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CRYPTOLABEL_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CryptolabelSDK.test();
        const ent = testsdk.Address();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CRYPTOLABEL_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'address.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "address", "req": true, "type": "`$OBJECT`", "index$": 0 }, { "active": true, "name": "entity", "req": true, "type": "`$OBJECT`", "index$": 1 }, { "active": true, "name": "id", "req": false, "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "labels", "req": true, "type": "`$ARRAY`", "index$": 3 }, { "active": true, "name": "query", "req": true, "type": "`$OBJECT`", "index$": 4 }], "id": { "field": "id", "name": "id", "parts": ["chain", "address"], "sep": "/" }, "name": "address", "op": { "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "header": [{ "active": true, "example": "application/json", "kind": "header", "name": "accept", "orig": "accept", "reqd": false, "type": "`$STRING`" }, { "active": true, "kind": "header", "name": "user_agent", "orig": "user_agent", "reqd": false, "type": "`$STRING`" }], "params": [{ "active": true, "kind": "param", "name": "address", "orig": "address", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "param", "name": "chain", "orig": "chain", "reqd": true, "type": "`$STRING`", "index$": 1 }] }, "contract": { "id": "GET /address/{chain}/{address}", "json": "{\"operationId\":\"getAddressDetails\",\"parameters\":[{\"description\":\"Blockchain identifier.\",\"in\":\"path\",\"name\":\"chain\",\"required\":true,\"schema\":{\"enum\":[\"bitcoin\",\"ethereum\",\"tron\"],\"type\":\"string\"}},{\"description\":\"Address validated against the selected chain.\",\"in\":\"path\",\"name\":\"address\",\"required\":true,\"schema\":{\"examples\":[\"0x22af984f13DFB5C80145E3F9eE1050Ae5a5FB651\"],\"minLength\":1,\"type\":\"string\"}},{\"description\":\"Set to application/json.\",\"in\":\"header\",\"name\":\"Accept\",\"required\":false,\"schema\":{\"default\":\"application/json\",\"type\":\"string\"}},{\"description\":\"If possible, include your application name and a contact email so CryptoLabel can reach you about API updates, maintenance, or request-specific issues.\",\"in\":\"header\",\"name\":\"User-Agent\",\"required\":false,\"schema\":{\"examples\":[\"YourAppName/1.0 (contact@example.com)\"],\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"ethereumKraken\":{\"value\":{\"address\":{\"explorerUrl\":\"https://www.blockchain.com/explorer/addresses/eth/0x22af984f13DFB5C80145E3F9eE1050Ae5a5FB651\",\"model\":\"account_based\",\"readableModel\":\"Account-based model\",\"readableType\":\"Externally Owned Account\",\"type\":\"eoa\",\"value\":\"0x22af984f13DFB5C80145E3F9eE1050Ae5a5FB651\"},\"entity\":{\"category\":\"exchange\",\"name\":\"Kraken\",\"readableCategory\":\"Exchange\"},\"labels\":[{\"category\":\"cex\",\"method\":\"aggregation\",\"readableCategory\":\"Centralized Exchange\",\"readableMethod\":\"Aggregation\",\"readableSourceType\":\"Public\",\"readableStatus\":\"Active\",\"readableType\":\"Exchange Cold Wallet\",\"sourceType\":\"public\",\"status\":\"active\",\"type\":\"exchange_cold_wallet\"}],\"query\":{\"address\":\"0x22af984f13DFB5C80145E3F9eE1050Ae5a5FB651\",\"chain\":\"ethereum\",\"readableChain\":\"Ethereum\"}}}},\"schema\":{\"properties\":{\"address\":{\"properties\":{\"explorerUrl\":{\"format\":\"uri\",\"type\":\"string\"},\"model\":{\"enum\":[\"account_based\",\"utxo\"],\"type\":\"string\"},\"readableModel\":{\"type\":\"string\"},\"readableType\":{\"type\":\"string\"},\"type\":{\"enum\":[\"contract\",\"eoa\",\"unknown\"],\"type\":\"string\"},\"value\":{\"type\":\"string\"}},\"required\":[\"value\",\"type\",\"readableType\",\"model\",\"readableModel\",\"explorerUrl\"],\"type\":\"object\"},\"entity\":{\"properties\":{\"category\":{\"enum\":[\"bridge\",\"custodian\",\"dao\",\"defi_protocol\",\"dex_aggregator\",\"exchange\",\"gambling_service\",\"government\",\"individual_address\",\"illicit_activity\",\"marketplace\",\"mining_pool\",\"mixer\",\"payment_service\",\"public_figure\",\"service_provider\",\"token_issuer\",\"wallet_provider\",\"unknown\"],\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"readableCategory\":{\"type\":\"string\"}},\"required\":[\"name\",\"category\",\"readableCategory\"],\"type\":\"object\"},\"labels\":{\"items\":{\"properties\":{\"category\":{\"enum\":[\"behavior\",\"bridge\",\"cex\",\"compliance\",\"crime\",\"custody\",\"defi\",\"flow\",\"fraud\",\"gambling\",\"identity\",\"infrastructure\",\"marketplace\",\"mining\",\"mixer\",\"payment\",\"risk\",\"sanctions\",\"service\",\"trading\",\"treasury\",\"unknown\",\"wallet\"],\"type\":\"string\"},\"method\":{\"enum\":[\"aggregation\",\"heuristic\",\"import\",\"manual\",\"onchain_analysis\"],\"type\":\"string\"},\"readableCategory\":{\"type\":\"string\"},\"readableMethod\":{\"type\":\"string\"},\"readableSourceType\":{\"type\":\"string\"},\"readableStatus\":{\"type\":\"string\"},\"readableType\":{\"type\":\"string\"},\"sourceType\":{\"enum\":[\"internal\",\"manual_review\",\"partner\",\"public\"],\"type\":\"string\"},\"status\":{\"enum\":[\"active\",\"historical\",\"inactive\"],\"type\":\"string\"},\"type\":{\"enum\":[\"bridge_address\",\"burn_address\",\"compliance_related\",\"cross_chain_activity\",\"custodial_wallet\",\"defi_pool\",\"defi_treasury\",\"deployer\",\"dex_contract\",\"darknet_market\",\"exchange_cold_wallet\",\"exchange_deposit_wallet\",\"exchange_hot_wallet\",\"exchange_withdrawal_wallet\",\"forwarder_contract\",\"fraud_related\",\"gambling_address\",\"high_frequency\",\"high_volume\",\"institutional_flow\",\"market_maker_related\",\"marketplace_address\",\"money_laundering\",\"mining_pool_payout\",\"mixer_address\",\"blackmail\",\"payment_processor\",\"phishing\",\"proxy_contract\",\"public_figure_related\",\"risky_service\",\"sanctioned\",\"scam\",\"service_wallet\",\"staking_wallet\",\"stolen_funds\",\"terrorism_related\",\"treasury_wallet\",\"unknown\",\"validator\",\"wrapper_contract\"],\"type\":\"string\"}},\"required\":[\"type\",\"readableType\",\"category\",\"readableCategory\",\"sourceType\",\"readableSourceType\",\"method\",\"readableMethod\",\"status\",\"readableStatus\"],\"type\":\"object\"},\"type\":\"array\"},\"query\":{\"properties\":{\"address\":{\"type\":\"string\"},\"chain\":{\"enum\":[\"bitcoin\",\"ethereum\",\"tron\"],\"type\":\"string\"},\"readableChain\":{\"type\":\"string\"}},\"required\":[\"chain\",\"readableChain\",\"address\"],\"type\":\"object\"}},\"required\":[\"query\",\"address\",\"entity\",\"labels\"],\"type\":\"object\"}}},\"description\":\"Resolved address details.\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"description\":\"Stable machine-readable error code.\",\"examples\":[\"bad_request\"],\"type\":\"string\"},\"message\":{\"description\":\"Safe public error message.\",\"type\":\"string\"},\"path\":{\"examples\":[\"/api/v1/address/ethereum/0x123\"],\"type\":\"string\"},\"timestamp\":{\"format\":\"date-time\",\"type\":\"string\"}},\"required\":[\"code\",\"message\",\"path\",\"timestamp\"],\"type\":\"object\"}}},\"description\":\"Invalid chain or address.\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"description\":\"Stable machine-readable error code.\",\"examples\":[\"bad_request\"],\"type\":\"string\"},\"message\":{\"description\":\"Safe public error message.\",\"type\":\"string\"},\"path\":{\"examples\":[\"/api/v1/address/ethereum/0x123\"],\"type\":\"string\"},\"timestamp\":{\"format\":\"date-time\",\"type\":\"string\"}},\"required\":[\"code\",\"message\",\"path\",\"timestamp\"],\"type\":\"object\"}}},\"description\":\"Internal server error.\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/address/{chain}/{address}", "segments": [{ "lit": "address" }, { "var": "chain" }, { "var": "address" }], "select": { "exist": ["accept", "address", "chain", "user_agent"] }, "transform": { "req": "`reqdata`", "res": "`body.address`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [["address"]] }, "key$": "address", "name__orig": "address", "Name": "Address", "name_": "address", "name-": "address", "NAME": "ADDRESS", "index$": 0 }, { "active": true, "entity": "address", "key$": "BasicAddressFlow", "kind": "basic", "name": "BasicAddressFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "address_ref01", "srcdatavar": "address_ref01_data", "suffix": "_dt0" }, "match": { "chain": "chain01", "id": "address01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-address_ref01" } }], "index$": 0 }] }, 'Address');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let address_ref01_data = Object.values(setup.data.existing.address)[0];
        // LOAD
        const address_ref01_ent = client.Address();
        const address_ref01_match_dt0 = {};
        address_ref01_match_dt0.id = address_ref01_data.id;
        const address_ref01_data_dt0 = (await address_ref01_ent.load(address_ref01_match_dt0)).data();
        (0, node_assert_1.default)(address_ref01_data_dt0.id === address_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/address/AddressTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CryptolabelSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['address01', 'address02', 'address03', 'address01', 'address02', 'address03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CRYPTOLABEL_TEST_ADDRESS_ENTID': idmap,
        'CRYPTOLABEL_TEST_LIVE': 'FALSE',
        'CRYPTOLABEL_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['CRYPTOLABEL_TEST_ADDRESS_ENTID'];
    const live = 'TRUE' === env.CRYPTOLABEL_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CRYPTOLABEL_TEST_ADDRESS_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.CryptolabelSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.CRYPTOLABEL_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=AddressEntity.test.js.map