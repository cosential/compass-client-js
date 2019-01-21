import { Base64 } from 'js-base64';
import 'isomorphic-fetch';
import { Config } from '../Config';

export interface IRequestOptions {
    ShowErrors: boolean;
}

export interface IGetResponse<T> {
    Success: boolean;
    Error: Error;
    Result: T;
}

export class CompassClient {

    private url: string;
    private key: string;
    private firmId: number;
    private username: string;
    private password: string;

    constructor(firmId: number, username: string, password: string) {
        this.url = Config.CompassURL;
        this.key = Config.ApiKey;

        this.firmId = firmId;
        this.username = username;
        this.password = password;
    }

    public async get<T>(url: string, opts: IRequestOptions = {ShowErrors: true}): Promise<IGetResponse<T>> {
        
        let headers = {
            //Basic auth
            'Authorization': 'Basic ' + Base64.encode(this.username + ':' + this.password),
            'x-compass-firm-id': this.firmId.toString(),
            'x-compass-api-key': this.key,
            //We're expecting json
            'Accept': 'application/json'
        };

        if (opts.ShowErrors) headers['x-compass-show-errors'] = 'true';

        try {

            let response = await fetch(this.url + url, {
                method: 'GET',
                headers: headers
            });

            if (!response.ok) {
                console.log(headers);
                throw new Error(`Compass API call failed. [${response.url}] responded with: [${response.status} ${response.statusText}]`);
            }
    
            let data = await response.json();
    
            return {
                Success: true,
                Error: null,
                Result: data
            };

        } catch (error) {
            return {
                Success: false,
                Error: error,
                Result: null
            };
        }         
    }
}