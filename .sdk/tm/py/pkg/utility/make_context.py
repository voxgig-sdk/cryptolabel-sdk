# Cryptolabel SDK utility: make_context

from projectname_sdk.core.context import CryptolabelContext


def make_context_util(ctxmap, basectx):
    return CryptolabelContext(ctxmap, basectx)
