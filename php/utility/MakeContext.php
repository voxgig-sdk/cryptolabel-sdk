<?php
declare(strict_types=1);

// Cryptolabel SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class CryptolabelMakeContext
{
    public static function call(array $ctxmap, ?CryptolabelContext $basectx): CryptolabelContext
    {
        return new CryptolabelContext($ctxmap, $basectx);
    }
}
