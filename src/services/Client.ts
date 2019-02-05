
import { Base64 } from 'js-base64';
import 'isomorphic-fetch';
import { ClientConfig } from '../service-models/client-config';
import { IRequestOptions, IResponse } from '..';

/**
 * Represents the Client service for the Cosential Compass API calls.
 */
export class Client {

    private _config: ClientConfig;

    /**
     * Getter config
     * @return {ClientConfig}
     */
	public get config(): ClientConfig {
		return this._config;
	}

    /**
     * Setter config
     * @param {ClientConfig} value
     */
	public set config(value: ClientConfig) {
		this._config = value;
	}

    constructor(config: ClientConfig) {
        this.config = config;
    }

    /**
     * Returns a response for the GET request.
     * @param url - Compass API endpoint with/without a valid Id
     * @param opts - Optional request headers
     * @returns A detailed response object as a Promise
     */
    public async get<T>(url: string, opts: IRequestOptions = {showErrors: true}): Promise<IResponse<T>> {
        
        let headers = {
            //Basic auth
            'Authorization': 'Basic ' + Base64.encode(this.config.username + ':' + this.config.password),
            'x-compass-firm-id': this.config.firmId.toString(),
            'x-compass-api-key': this.config.apiKey,
            //We're expecting json
            'Accept': 'application/json'
        };

        if (opts.showErrors) headers['x-compass-show-errors'] = 'true';

        try {

            let response: Response = await fetch(this.config.compassUrl + url, {
                method: 'GET',
                headers: headers
            });

            if (!response.ok) {
                throw new Error(`Compass API call failed. [${response.url}] responded with: [${response.status} ${response.statusText}]`);
            }
    
            let data: T = await response.json();
    
            return {
                success: true,
                error: null,
                message: null,
                result: data
            };

        } catch (e) {
            return {
                success: false,
                error: e,
                message: e.message,
                result: null
            };
        }         
    }

    /**
     * Returns a response for the POST request.
     * @param url - Compass API endpoint
     * @param payload - Array of elements
     * @param opts - Optional request headers
     * @returns A detailed response object as a Promise
     */
    public async post<T>(url: string, payload: T, opts: IRequestOptions = {showErrors: true}): Promise<IResponse<T>> {
        
        let headers = {
            'Authorization': 'Basic ' + Base64.encode(this.config.username + ':' + this.config.password),
            'x-compass-firm-id': this.config.firmId.toString(),
            'x-compass-api-key': this.config.apiKey,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };

        if (opts.showErrors) headers['x-compass-show-errors'] = 'true';

        try {
            
            let response: Response = await fetch(this.config.compassUrl + url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                throw new Error(`Compass API call failed. [${response.url}] responded with: [${response.status} ${response.statusText}]`);
            }
    
            let data: T = await response.json();
    
            return {
                success: true,
                error: null,
                message: null,
                result: data
            };

        } catch (e) {
            return {
                success: false,
                error: e,
                message: e.message,
                result: null
            };
        }         
    }

    /**
     * Returns a response for the PUT request.
     * @param url - Compass API endpoint with a valid Id
     * @param payload - Updated element including new and existing values
     * @param opts - Optional request headers
     * @returns A detailed response object as a Promise
     */
    public async put<T>(url: string, payload: T, opts: IRequestOptions = {showErrors: true}): Promise<IResponse<T>> {
        
        let headers = {
            'Authorization': 'Basic ' + Base64.encode(this.config.username + ':' + this.config.password),
            'x-compass-firm-id': this.config.firmId.toString(),
            'x-compass-api-key': this.config.apiKey,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };

        if (opts.showErrors) headers['x-compass-show-errors'] = 'true';

        try {
            
            let response: Response = await fetch(this.config.compassUrl + url, {
                method: 'PUT',
                headers: headers,
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                throw new Error(`Compass API call failed. [${response.url}] responded with: [${response.status} ${response.statusText}]`);
            }
    
            let data: T = await response.json();
    
            return {
                success: true,
                error: null,
                message: null,
                result: data
            };

        } catch (e) {
            return {
                success: false,
                error: e,
                message: e.message,
                result: null
            };
        }
    }

    /**
     * Returns a response for the DELETE request.
     * @param url - Compass API endpoint with a valid Id
     * @param opts - Optional request headers
     * @returns A detailed response object as a Promise
     */
    public async delete<T>(url: string, opts: IRequestOptions = {showErrors: true}): Promise<IResponse<T>> {
        
        let headers = {
            'Authorization': 'Basic ' + Base64.encode(this.config.username + ':' + this.config.password),
            'x-compass-firm-id': this.config.firmId.toString(),
            'x-compass-api-key': this.config.apiKey
        };

        if (opts.showErrors) headers['x-compass-show-errors'] = 'true';

        try {
            
            let response: Response = await fetch(this.config.compassUrl + url, {
                method: 'DELETE',
                headers: headers
            });

            if (!response.ok) {
                throw new Error(`Compass API call failed. [${response.url}] responded with: [${response.status} ${response.statusText}]`);
            }
            
            let data: T = await response.json();
    
            return {
                success: true,
                error: null,
                message: null,
                result: data
            };

        } catch (e) {
            return {
                success: false,
                error: e,
                message: e.message,
                result: null
            };
        }
    }

    /**
     * Returns search results based on query parameters.
     * @param url - Compass API endpoint
     * @param parameters - Search constraints
     * @param includeDeleted - Include deleted records in search
     * @param opts - Optional request headers
     * @returns A detailed response object as a Promise
     */
    public async search<T>(url: string, parameters: any, includeDeleted: boolean = false, opts: IRequestOptions = {showErrors: true}): Promise<IResponse<T>> {
        
        let headers = {
            'Authorization': 'Basic ' + Base64.encode(this.config.username + ':' + this.config.password),
            'x-compass-firm-id': this.config.firmId.toString(),
            'x-compass-api-key': this.config.apiKey,
            'Accept': 'application/json'
        };

        let newUrl: string = this.config.compassUrl + url;

        if(Object.keys(parameters).length > 0){
            newUrl +=  '/search?q=';
            Object.keys(parameters).forEach( (index) => { newUrl += (index + ':' + parameters[index] + ' AND ') } );
            //remove trailing AND
            newUrl = newUrl.substring(0, newUrl.length - 5);

            if (includeDeleted) newUrl += '&includedeleted=true';
        }        

        if (opts.showErrors) headers['x-compass-show-errors'] = 'true';

        try {
            
            let response: Response = await fetch(newUrl, {
                method: 'GET',
                headers: headers
            });

            if (!response.ok) {
                throw new Error(`Compass API call failed. [${response.url}] responded with: [${response.status} ${response.statusText}]`);
            }
    
            let data: T = await response.json();
    
            return {
                success: true,
                error: null,
                message: null,
                result: data
            };

        } catch (e) {
            return {
                success: false,
                error: e,
                message: e.message,
                result: null
            };
        }         
    }
}