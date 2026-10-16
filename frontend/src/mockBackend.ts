import type {
    backendInterface,
    DetailedService,
    ExperienceTrustItem,
    Machine,
    Service,
    ContactInfo,
    ServiceArea,
    LocationCoordinates,
    CallToActionContent,
    _CaffeineStorageCreateCertificateResult,
    _CaffeineStorageRefillInformation,
    _CaffeineStorageRefillResult
} from './backend';
import { ExternalBlob } from './backend';

export class LocalMockBackend implements backendInterface {
    private contactInfo: ContactInfo = {
        phoneNumber: '9980481645',
        whatsappNumber: '9980481645',
        businessHours: 'Mon - Sat: 8:30 AM - 8:30 PM, Sun: 10:00 AM - 5:00 PM'
    };

    private serviceLocation: LocationCoordinates = {
        latitude: '12°50\'04.9"N',
        longitude: '77°29\'09.6"E'
    };

    private services: Service[] = [
        {
            id: 'repairs',
            name: 'Sewing Machine Repairs',
            description: 'Expert repairs for all types of sewing machines, domestic and industrial.',
            price: 350n
        },
        {
            id: 'new_machines',
            name: 'New Sewing Machines',
            description: 'Wide range of brand-new sewing machines with warranty and doorstep setup.',
            price: 7500n
        },
        {
            id: 'second_hand',
            name: 'Second-Hand Machines',
            description: 'Quality pre-owned sewing machines, thoroughly checked and serviced.',
            price: 3500n
        },
        {
            id: 'home_delivery',
            name: 'Home Delivery',
            description: 'Safe and convenient doorstep pickup and delivery across local areas.',
            price: 150n
        }
    ];

    private detailedServices: DetailedService[] = [
        {
            id: 'repair',
            emoji: '🔧',
            title: 'Sewing Machine Repair (Doorstep Service)',
            description: 'Complete doorstep diagnosis and maintenance for all models.',
            bulletPoints: [
                'All brands & models',
                'Manual, electric, domestic & industrial machines',
                'Belt issues, motor problems, needle alignment, noise issues'
            ]
        },
        {
            id: 'industrial_repair',
            emoji: '🏭',
            title: 'Industrial Sewing Machine Repair',
            description: 'Factory & tailoring unit high-speed machine servicing.',
            bulletPoints: [
                'Factory & tailoring unit machines',
                'On-site repair available',
                'Preventive maintenance'
            ]
        },
        {
            id: 'new_machines',
            emoji: '🧵',
            title: 'New Sewing Machine Sales',
            description: 'Top quality brand new sewing machines with full warranty.',
            bulletPoints: [
                'Branded machines',
                'Suitable for home & tailoring shops',
                'Home delivery available'
            ]
        },
        {
            id: 'second_hand',
            emoji: '♻️',
            title: 'Second-Hand Sewing Machines',
            description: 'Tested and verified pre-owned machines at budget prices.',
            bulletPoints: [
                'Fully checked & serviced',
                'Budget-friendly options',
                'Home delivery available'
            ]
        }
    ];

    private experienceTrustItems: ExperienceTrustItem[] = [
        { emoji: '✅', description: '22+ Years of Experience' },
        { emoji: '✅', description: 'Doorstep Service Available' },
        { emoji: '✅', description: 'Honest Pricing' },
        { emoji: '✅', description: 'Quick Response' },
        { emoji: '✅', description: 'Trusted by Tailors & Homes' }
    ];

    private serviceAreas: ServiceArea[] = [
        {
            areaName: 'Doorstep Service Coverage (Nearby Localities & Within 25 km)',
            coordinates: ['12.8347', '77.4860']
        },
        {
            areaName: 'Tailoring Hubs & Garment Production Units',
            coordinates: ['12.8347', '77.4860']
        }
    ];

    private machines: Machine[] = [
        {
            id: '1',
            name: 'Modern Home Sewing Machine',
            description: 'Compact, efficient multi-stitch machine ideal for domestic sewing.',
            isNew: true,
            photo: ExternalBlob.fromURL('/assets/generated/home-sewing-setup.dim_800x600.jpg'),
            price: 8500n
        },
        {
            id: '2',
            name: 'Heavy-Duty Industrial Machine',
            description: 'High-speed industrial machine built for heavy fabrics, canvas & denim.',
            isNew: true,
            photo: ExternalBlob.fromURL('/assets/generated/industrial-machine.dim_400x400.jpg'),
            price: 24000n
        },
        {
            id: '3',
            name: 'Computerized Digital Stitcher',
            description: 'LCD screen, automatic thread cutter, and 100+ built-in stitch patterns.',
            isNew: true,
            photo: ExternalBlob.fromURL('/assets/generated/modern-machine.dim_400x400.jpg'),
            price: 19500n
        },
        {
            id: '4',
            name: 'Classic Vintage Singer Machine',
            description: 'Restored antique Singer machine with foot treadle and wooden base.',
            isNew: false,
            photo: ExternalBlob.fromURL('/assets/generated/vintage-singer.dim_400x400.jpg'),
            price: 6500n
        }
    ];

    async _caffeineStorageBlobIsLive(_hash: Uint8Array): Promise<boolean> {
        return true;
    }
    async _caffeineStorageBlobsToDelete(): Promise<Array<Uint8Array>> {
        return [];
    }
    async _caffeineStorageConfirmBlobDeletion(_blobs: Array<Uint8Array>): Promise<void> {}
    async _caffeineStorageCreateCertificate(blobHash: string): Promise<_CaffeineStorageCreateCertificateResult> {
        return { method: 'none', blob_hash: blobHash };
    }
    async _caffeineStorageRefillCashier(
        _refillInformation: _CaffeineStorageRefillInformation | null
    ): Promise<_CaffeineStorageRefillResult> {
        return { success: true, topped_up_amount: 0n };
    }
    async _caffeineStorageUpdateGatewayPrincipals(): Promise<void> {}

    async addMachine(
        id: string,
        name: string,
        price: bigint,
        isNew: boolean,
        photo: ExternalBlob,
        description: string
    ): Promise<void> {
        this.machines.push({ id, name, price, isNew, photo, description });
    }

    async addService(id: string, name: string, description: string, price: bigint | null): Promise<void> {
        this.services.push({ id, name, description, price: price ?? undefined });
    }

    async addServiceArea(areaName: string, coordinates: Array<string>): Promise<void> {
        this.serviceAreas.push({ areaName, coordinates });
    }

    async getAllDetailedServices(): Promise<Array<DetailedService>> {
        return this.detailedServices;
    }

    async getAllExperienceTrustItems(): Promise<Array<ExperienceTrustItem>> {
        return this.experienceTrustItems;
    }

    async getAllMachines(): Promise<Array<Machine>> {
        return this.machines;
    }

    async getAllServices(): Promise<Array<Service>> {
        return this.services;
    }

    async getCallToActionContent(_key: string): Promise<CallToActionContent> {
        return {
            buttonText: 'Call Now for Doorstep Repair',
            subheading: 'Need Immediate Sewing Machine Repair?',
            phoneNumber: '9980481645',
            whatsappLink: 'https://wa.me/919980481645',
            urgencyMessage: 'Book your repair today and get prompt doorstep service!'
        };
    }

    async getContactInfo(): Promise<ContactInfo> {
        return this.contactInfo;
    }

    async getMachine(id: string): Promise<Machine | null> {
        return this.machines.find((m) => m.id === id) || null;
    }

    async getMachinesWithPhotos(): Promise<Array<Machine>> {
        return this.machines;
    }

    async getService(id: string): Promise<Service | null> {
        return this.services.find((s) => s.id === id) || null;
    }

    async getServiceAreas(): Promise<Array<ServiceArea>> {
        return this.serviceAreas;
    }

    async getServiceLocation(): Promise<LocationCoordinates> {
        return this.serviceLocation;
    }

    async searchMachines(term: string): Promise<Array<Machine>> {
        const lower = term.toLowerCase();
        return this.machines.filter((m) => m.name.toLowerCase().includes(lower));
    }

    async searchServices(term: string): Promise<Array<Service>> {
        const lower = term.toLowerCase();
        return this.services.filter((s) => s.name.toLowerCase().includes(lower));
    }

    async updateContactInfo(phoneNumber: string, whatsappNumber: string, businessHours: string): Promise<void> {
        this.contactInfo = { phoneNumber, whatsappNumber, businessHours };
    }

    async updateServiceLocation(latitude: string, longitude: string): Promise<void> {
        this.serviceLocation = { latitude, longitude };
    }

    async updateServicePrice(serviceId: string, price: bigint | null): Promise<void> {
        const service = this.services.find((s) => s.id === serviceId);
        if (service) {
            service.price = price ?? undefined;
        }
    }
}
