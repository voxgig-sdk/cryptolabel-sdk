import { CryptolabelEntityBase } from '../CryptolabelEntityBase';
import type { CryptolabelSDK } from '../CryptolabelSDK';
import type { Control } from '../types';
import type { Address, AddressLoadMatch } from '../CryptolabelTypes';
declare class AddressEntity extends CryptolabelEntityBase<Address> {
    constructor(client: CryptolabelSDK, entopts: any);
    make(this: AddressEntity): AddressEntity;
    load(this: any, reqmatch?: AddressLoadMatch, ctrl?: Control): Promise<AddressEntity>;
}
export { AddressEntity };
