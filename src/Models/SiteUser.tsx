

export enum Roles {
    EMPLOYEE = 'EMPLOYEE',
    MANAGER = 'MANAGER',
    ADMIN = 'ADMIN'
}

export interface SiteUser {
    employeeID: number;
    password: string;
    name: string;
    jobTitle: string;
    phoneNumber: string;
    email: string;
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    postalCode: number;
    birthDate: Date;
    anniversary: Date;
    managerID: number;
    role: Roles;
}