// Typed models for the Cryptolabel SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Address {
  category: string
  method: string
  readable_category: string
  readable_method: string
  readable_source_type: string
  readable_status: string
  readable_type: string
  source_type: string
  status: string
  type: string
}

export interface AddressListMatch {
  address: string
  chain: string
}

