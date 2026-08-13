# Cryptolabel SDK feature factory

from cryptolabel_sdk.feature.base_feature import CryptolabelBaseFeature
from cryptolabel_sdk.feature.test_feature import CryptolabelTestFeature


def _make_feature(name):
    features = {
        "base": lambda: CryptolabelBaseFeature(),
        "test": lambda: CryptolabelTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
