package voxgigcryptolabelsdk

import (
	"github.com/voxgig-sdk/cryptolabel-sdk/go/core"
	"github.com/voxgig-sdk/cryptolabel-sdk/go/entity"
	"github.com/voxgig-sdk/cryptolabel-sdk/go/feature"
	_ "github.com/voxgig-sdk/cryptolabel-sdk/go/utility"
)

// Type aliases preserve external API.
type CryptolabelSDK = core.CryptolabelSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type CryptolabelEntity = core.CryptolabelEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type CryptolabelError = core.CryptolabelError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewAddressEntityFunc = func(client *core.CryptolabelSDK, entopts map[string]any) core.CryptolabelEntity {
		return entity.NewAddressEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewCryptolabelSDK = core.NewCryptolabelSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewCryptolabelSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *CryptolabelSDK  { return NewCryptolabelSDK(nil) }
func Test() *CryptolabelSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
