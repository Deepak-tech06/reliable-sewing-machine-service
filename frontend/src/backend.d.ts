import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export class ExternalBlob {
    getBytes(): Promise<Uint8Array<ArrayBuffer>>;
    getDirectURL(): string;
    static fromURL(url: string): ExternalBlob;
    static fromBytes(blob: Uint8Array<ArrayBuffer>): ExternalBlob;
    withUploadProgress(onProgress: (percentage: number) => void): ExternalBlob;
}
export interface LocationCoordinates {
    latitude: string;
    longitude: string;
}
export interface ServiceArea {
    areaName: string;
    coordinates: Array<string>;
}
export interface Machine {
    id: string;
    name: string;
    description: string;
    isNew: boolean;
    photo: ExternalBlob;
    price: bigint;
}
export interface Service {
    id: string;
    name: string;
    description: string;
    price?: bigint;
}
export interface ExperienceTrustItem {
    description: string;
    emoji: string;
}
export interface DetailedService {
    id: string;
    title: string;
    description: string;
    emoji: string;
    bulletPoints: Array<string>;
}
export interface ContactInfo {
    businessHours: string;
    whatsappNumber: string;
    phoneNumber: string;
}
export interface CallToActionContent {
    subheading: string;
    whatsappLink: string;
    buttonText: string;
    phoneNumber: string;
    urgencyMessage: string;
}
export interface backendInterface {
    addMachine(id: string, name: string, price: bigint, isNew: boolean, photo: ExternalBlob, description: string): Promise<void>;
    addService(id: string, name: string, description: string, price: bigint | null): Promise<void>;
    addServiceArea(areaName: string, coordinates: Array<string>): Promise<void>;
    getAllDetailedServices(): Promise<Array<DetailedService>>;
    getAllExperienceTrustItems(): Promise<Array<ExperienceTrustItem>>;
    getAllMachines(): Promise<Array<Machine>>;
    getAllServices(): Promise<Array<Service>>;
    getCallToActionContent(_key: string): Promise<CallToActionContent>;
    getContactInfo(): Promise<ContactInfo>;
    getMachine(id: string): Promise<Machine | null>;
    getMachinesWithPhotos(): Promise<Array<Machine>>;
    getService(id: string): Promise<Service | null>;
    getServiceAreas(): Promise<Array<ServiceArea>>;
    getServiceLocation(): Promise<LocationCoordinates>;
    searchMachines(term: string): Promise<Array<Machine>>;
    searchServices(term: string): Promise<Array<Service>>;
    updateContactInfo(phoneNumber: string, whatsappNumber: string, businessHours: string): Promise<void>;
    updateServiceLocation(latitude: string, longitude: string): Promise<void>;
    updateServicePrice(serviceId: string, price: bigint | null): Promise<void>;
}
