import { Base64 } from 'js-base64';
import 'isomorphic-fetch';
import { ClientConfig } from '../model/ClientConfig';

export interface IRequestOptions {
    ShowErrors: boolean;
}

export interface IGetResponse<T> {
    Success: boolean;
    Message: string;
    Error: Error;
    Result: T;
}

export class Client {
    private config: ClientConfig;

    constructor(config: ClientConfig) {
        this.config = new ClientConfig();
        this.reconfigure(config);
    }

    public reconfigure(config: object): void {
        Object.keys(this.config).forEach(prop => {
            if (prop in config) {
                let value = config[prop];
                if (!ClientConfig.testProp(prop, value)) throw new Error(`[${ prop }] config property value [${ value }] is not valid`);
                this.config[prop] = value;
            }
        });
    }

    public async get<T>(url: string, opts: IRequestOptions = {ShowErrors: true}): Promise<IGetResponse<T>> {
        
        let headers = {
            //Basic auth
            'Authorization': 'Basic ' + Base64.encode(this.config.Username + ':' + this.config.Password),
            'x-compass-firm-id': this.config.FirmId.toString(),
            'x-compass-api-key': this.config.ApiKey,
            //We're expecting json
            'Accept': 'application/json'
        };

        if (opts.ShowErrors) headers['x-compass-show-errors'] = 'true';

        try {

            let response = await fetch(this.config.CompassURL + url, {
                method: 'GET',
                headers: headers
            });

            if (!response.ok) {
                throw new Error(`Compass API call failed. [${response.url}] responded with: [${response.status} ${response.statusText}]`);
            }
    
            let data = await response.json();
    
            return {
                Success: true,
                Error: null,
                Message: null,
                Result: data
            };

        } catch (e) {
            return {
                Success: false,
                Error: e,
                Message: e.Message,
                Result: null
            };
        }         
    }
}