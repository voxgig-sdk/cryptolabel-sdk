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
# @!attribute [rw] readable_category
#   @return [String]
#
# @!attribute [rw] readable_method
#   @return [String]
#
# @!attribute [rw] readable_source_type
#   @return [String]
#
# @!attribute [rw] readable_status
#   @return [String]
#
# @!attribute [rw] readable_type
#   @return [String]
#
# @!attribute [rw] source_type
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
  :readable_category,
  :readable_method,
  :readable_source_type,
  :readable_status,
  :readable_type,
  :source_type,
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

