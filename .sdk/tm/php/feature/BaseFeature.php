<?php
declare(strict_types=1);

// Cryptolabel SDK base feature

class CryptolabelBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(CryptolabelContext $ctx, array $options): void {}
    public function PostConstruct(CryptolabelContext $ctx): void {}
    public function PostConstructEntity(CryptolabelContext $ctx): void {}
    public function SetData(CryptolabelContext $ctx): void {}
    public function GetData(CryptolabelContext $ctx): void {}
    public function GetMatch(CryptolabelContext $ctx): void {}
    public function SetMatch(CryptolabelContext $ctx): void {}
    public function PrePoint(CryptolabelContext $ctx): void {}
    public function PreSpec(CryptolabelContext $ctx): void {}
    public function PreRequest(CryptolabelContext $ctx): void {}
    public function PreResponse(CryptolabelContext $ctx): void {}
    public function PreResult(CryptolabelContext $ctx): void {}
    public function PreDone(CryptolabelContext $ctx): void {}
    public function PreUnexpected(CryptolabelContext $ctx): void {}
}
