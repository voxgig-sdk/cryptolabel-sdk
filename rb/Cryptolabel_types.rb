# frozen_string_literal: true

# Typed models for the Cryptolabel SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Address entity data model.
#
# @!attribute [rw] address
#   @return [Hash]
#
# @!attribute [rw] entity
#   @return [Hash]
#
# @!attribute [rw] labels
#   @return [Array]
#
# @!attribute [rw] query
#   @return [Hash]
Address = Struct.new(
  :address,
  :entity,
  :labels,
  :query,
  keyword_init: true
)

# Request payload for Address#load.
#
# @!attribute [rw] address
#   @return [String]
#
# @!attribute [rw] chain
#   @return [String]
AddressLoadMatch = Struct.new(
  :address,
  :chain,
  keyword_init: true
)

