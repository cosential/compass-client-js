export interface ContactEnrichment {
    Avatar: string;
    Organization: string;
    Title: string;
    Twitter: string;
    Linkedin: string;
    Facebook: string;
    Website: string;
    Details: {
        Name: {
            Given: string;
            Family: string;
        }[];
        Emails: {
            label: string;
            value: string;
        }[];
        Phones: {
            label: string;
            value: string;
            type: string;
        }[];
        Profiles: {
            Label: string;
            Username: string;
            Url: string;
            Service: string;
        }[];
        Locations: {
            Label: string;
            City: string;
            Region: string;
            RegionCode: string;
            Country: string;
            CountryCode: string;
            Formatted: string;
        }[];
        Employment: {
            name: string;
            domain: string;
            current: boolean;
            title: string;
            start: {
                year: number;
                month: number;
                day: number;
            };
            end: {
                year: number;
                month: number;
                day: number;
            }
        }[];
        Photos: {
            label: string;
            value: string;
        }[];
        Urls: {
            value: string;
        }[];
    }[];
    DataAddOns: {
        Id: string;
        Name: string;
        Enabled: boolean;
        Applied: boolean;
        Description: string;
        DocLink: string;
    }[];
    Updated: string;
}