<?php
declare(strict_types=1);

// Cryptolabel SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class CryptolabelFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new CryptolabelBaseFeature();
            case "test":
                return new CryptolabelTestFeature();
            default:
                return new CryptolabelBaseFeature();
        }
    }
}
