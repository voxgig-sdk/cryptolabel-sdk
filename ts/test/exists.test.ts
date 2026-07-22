
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { CryptolabelSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await CryptolabelSDK.test()
    equal(null !== testsdk, true)
  })

})
