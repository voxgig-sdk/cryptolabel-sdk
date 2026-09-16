# Cryptolabel SDK feature factory

from cryptolabel_sdk.feature.base_feature import CryptolabelBaseFeature
from cryptolabel_sdk.feature.ratelimit_feature import CryptolabelRatelimitFeature
from cryptolabel_sdk.feature.retry_feature import CryptolabelRetryFeature
from cryptolabel_sdk.feature.test_feature import CryptolabelTestFeature
from cryptolabel_sdk.feature.timeout_feature import CryptolabelTimeoutFeature


_FEATURES = {
    "base": lambda: CryptolabelBaseFeature(),
    "ratelimit": lambda: CryptolabelRatelimitFeature(),
    "retry": lambda: CryptolabelRetryFeature(),
    "test": lambda: CryptolabelTestFeature(),
    "timeout": lambda: CryptolabelTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
