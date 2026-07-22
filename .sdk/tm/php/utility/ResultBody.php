<?php
declare(strict_types=1);

// Cryptolabel SDK utility: result_body

class CryptolabelResultBody
{
    public static function call(CryptolabelContext $ctx): ?CryptolabelResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
