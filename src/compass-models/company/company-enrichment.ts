export interface CompanyEnrichment {
    name: string;
    location: string;
    twitter: string;
    linkedin: string;
    facebook: string;
    bio: string;
    logo: string;
    website: string;
    founded: number;
    employees: number;
    locale: string;
    category: string;
    details: {
        emails: {
            value: string;
            label: string;
        }[];
        phones: {
            value: string;
            label: string;
        }[];
        locations: {
            label: string;
            addressLine1: string;
            city: string;
            region: string;
            regionCode: string;
            postalCode: string;
            country: string;
            countrycode: string;
            formatted: string;
        }[];
        images: {
            value: string;
            label: string;
        }[];
        urls: {
            value: string;
            label: string;
        }[];
        keywords: string[];
        keyPeople: {
            fullName: string;
            title: string;
        }[];
    };
    updated: string;
}
