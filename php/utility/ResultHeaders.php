<?php
declare(strict_types=1);

// Cryptolabel SDK utility: result_headers

class CryptolabelResultHeaders
{
    public static function call(CryptolabelContext $ctx): ?CryptolabelResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
