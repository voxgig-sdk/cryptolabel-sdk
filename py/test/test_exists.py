# Cryptolabel SDK exists test

import pytest
from cryptolabel_sdk import CryptolabelSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = CryptolabelSDK.test(None, None)
        assert testsdk is not None
