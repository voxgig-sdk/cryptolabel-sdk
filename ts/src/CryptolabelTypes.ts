// Typed models for the Cryptolabel SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Address {
  address: Record<string, any>
  entity: Record<string, any>
  labels: any[]
  query: Record<string, any>
}

export interface AddressLoadMatch {
  address: string
  chain: string
}

