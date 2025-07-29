export class CreateEstablishmentDto {
    name: string;
    address: string;
    phoneNumber: string;
    email: string;
    website?: string;
    description?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
