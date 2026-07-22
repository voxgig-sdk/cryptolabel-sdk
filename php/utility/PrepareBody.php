<?php
declare(strict_types=1);

// Cryptolabel SDK utility: prepare_body

class CryptolabelPrepareBody
{
    public static function call(CryptolabelContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
