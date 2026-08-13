-- Typed models for the Cryptolabel SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Address
---@field category string
---@field method string
---@field readableCategory string
---@field readableMethod string
---@field readableSourceType string
---@field readableStatus string
---@field readableType string
---@field sourceType string
---@field status string
---@field type string

---@class AddressListMatch
---@field address string
---@field chain string

local M = {}

return M
