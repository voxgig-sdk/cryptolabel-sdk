<?php
declare(strict_types=1);

// Cryptolabel SDK exists test

require_once __DIR__ . '/../cryptolabel_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = CryptolabelSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
