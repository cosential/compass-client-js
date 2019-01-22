import { isUndefined } from "util";

export class ClientConfig {

    /* private properties */
    private urlTest: RegExp = /^(http|https):\/\/[^ "]+$/;
    private apiKeyTest: RegExp = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;

    /* properties */
    private _apiKey: string = '';
    private _compassUrl: string = 'https://compass.cosential.com/api';
    private _firmId: number = 0;
    private _username: string = '';
    private _password: string = '';

    /* property accessors */    
    public get apiKey(): string { return this._apiKey }
    
    public set apiKey(v: string) { 
        if (!isUndefined(v)) {
            if (!this.apiKeyTest.test(v)) throw new Error(`apiKey config property value [${ v }] is not valid.`);
            this._apiKey = v;
        }
    }

    public get compassUrl(): string { return this._compassUrl }
    public set compassUrl(v: string) { 
        if (!isUndefined(v)) {
            if (!this.urlTest.test(v)) throw new Error(`compassUrl config property value [${ v }] is not valid.`);
            this._compassUrl = v 
        }
        
    }

    public get firmId(): number { return this._firmId }
    public set firmId(v: number) { 
        if (!isUndefined(v)) {
            this._firmId = v 
        }
    }

    public get username(): string { return this._username }
    public set username(v: string) { this._username = v }

    public get password(): string { return this._password }
    public set password(v: string) { this._password = v }

    constructor(firmId?: number, username?: string, password?: string, apiKey?: string, compassUrl?: string) {        
        this.apiKey = apiKey;
        this.compassUrl = compassUrl;
        this.firmId = firmId;
        this.username = username;
        this.password = password;
    }
}