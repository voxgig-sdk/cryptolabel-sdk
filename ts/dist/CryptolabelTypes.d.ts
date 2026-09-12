export interface Address {
    address: Record<string, any>;
    entity: Record<string, any>;
    id?: string;
    labels: any[];
    query: Record<string, any>;
}
export interface AddressLoadMatch {
    address: string;
    chain: string;
}
