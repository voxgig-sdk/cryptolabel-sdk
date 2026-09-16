<?php
declare(strict_types=1);

// Cryptolabel SDK configuration

class CryptolabelConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "Cryptolabel",
                "slug" => "cryptolabel",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "ratelimit" => [
          'options' => [
            'active' => false,
            'burst' => 5,
            'rate' => 5,
          ],
          'optspec' => [
            'now' => '`$FUNCTION`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "retry" => [
          'options' => [
            'active' => false,
            'factor' => 2,
            'maxDelay' => 2000,
            'minDelay' => 50,
            'retries' => 2,
            'statuses' => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          ],
          'optspec' => [
            'jitter' => '`$BOOLEAN`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "test" => [
          'options' => [
            'active' => false,
          ],
          'optspec' => [
            'entity' => '`$MAP`',
            'net' => '`$MAP`',
          ],
          'strict' => false,
          'transport' => 'base',
        ],
                "timeout" => [
          'options' => [
            'active' => false,
            'ms' => 30000,
          ],
          'optspec' => [
            'clearTimer' => '`$FUNCTION`',
            'setTimer' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
            ],
            "options" => [
                "base" => "https://cryptolabel.io/api/v1",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "address" => [],
                ],
            ],
            "entity" => [
        'address' => [
          'fields' => [
            [
              'name' => 'address',
              'req' => true,
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'entity',
              'req' => true,
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'labels',
              'req' => true,
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'query',
              'req' => true,
              'type' => '`$OBJECT`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
            'parts' => [
              'chain',
              'address',
            ],
            'sep' => '/',
          ],
          'name' => 'address',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'header' => [
                      [
                        'example' => 'application/json',
                        'kind' => 'header',
                        'name' => 'accept',
                        'orig' => 'accept',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'header',
                        'name' => 'user_agent',
                        'orig' => 'user_agent',
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'address',
                        'orig' => 'address',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'param',
                        'name' => 'chain',
                        'orig' => 'chain',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/address/{chain}/{address}',
                  'segments' => [
                    [
                      'lit' => 'address',
                    ],
                    [
                      'var' => 'chain',
                    ],
                    [
                      'var' => 'address',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'accept',
                      'address',
                      'chain',
                      'user_agent',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.address`',
                  ],
                  'parts' => [
                    'address',
                    '{chain}',
                    '{address}',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'address',
              ],
            ],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return CryptolabelFeatures::make_feature($name);
    }
}
