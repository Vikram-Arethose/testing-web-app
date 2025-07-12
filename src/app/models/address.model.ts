export interface Address {
    id?: string;
    fullName: string;
    phoneNumber: string;
    email?: string;
    addressLine1: string;  // house number, flat/floor no
    addressLine2?: string; // apartment/Road/Area
    city: string;
    state: string;
    postalCode: string;
    country: string;
    isDefault?: boolean;
}
