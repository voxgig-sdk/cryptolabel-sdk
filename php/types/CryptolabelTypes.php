<?php
declare(strict_types=1);

// Typed models for the Cryptolabel SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Address entity data model. */
class Address
{
    public string $category;
    public string $method;
    public string $readable_category;
    public string $readable_method;
    public string $readable_source_type;
    public string $readable_status;
    public string $readable_type;
    public string $source_type;
    public string $status;
    public string $type;
}

/** Request payload for Address#list. */
class AddressListMatch
{
    public string $address;
    public string $chain;
}

