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
# @!attribute [rw] category
#   @return [String]
#
# @!attribute [rw] method
#   @return [String]
#
# @!attribute [rw] readableCategory
#   @return [String]
#
# @!attribute [rw] readableMethod
#   @return [String]
#
# @!attribute [rw] readableSourceType
#   @return [String]
#
# @!attribute [rw] readableStatus
#   @return [String]
#
# @!attribute [rw] readableType
#   @return [String]
#
# @!attribute [rw] sourceType
#   @return [String]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] type
#   @return [String]
Address = Struct.new(
  :category,
  :method,
  :readableCategory,
  :readableMethod,
  :readableSourceType,
  :readableStatus,
  :readableType,
  :sourceType,
  :status,
  :type,
  keyword_init: true
)

# Request payload for Address#list.
#
# @!attribute [rw] address
#   @return [String]
#
# @!attribute [rw] chain
#   @return [String]
AddressListMatch = Struct.new(
  :address,
  :chain,
  keyword_init: true
)

