export class ClientConfig {
    public ApiKey: string = '';
    public CompassURL: string = 'https://compass.cosential.com/api';
    public FirmId: number = 0;
    public Username: string = '';
    public Password: string = '';

    private static urlTest: RegExp = /^(http|https):\/\/[^ "]+$/;
    private static apiKeyTest: RegExp = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;

    public static testProp(prop: string, value: any): boolean {
        switch (prop) {
            case 'ApiKey':
                return this.apiKeyTest.test(value);
                break;
            case 'CompassURL':
                return this.urlTest.test(value);
                break;
            case 'FirmId':
                return Number.isInteger(value) && value > 0;
                break;
            case 'Username':
            case 'Password':
            default:
                return value.toString().length > 0;
                break;
        }
    }
}