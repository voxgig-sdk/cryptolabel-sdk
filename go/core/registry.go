package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewAddressEntityFunc func(client *CryptolabelSDK, entopts map[string]any) CryptolabelEntity

