import { Base64 } from 'js-base64';
import 'isomorphic-fetch';
import { ClientConfig } from '../serviceModels/clientConfig';
import { IRequestOptions, IGetResponse } from '..';

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
     * 
     * @param url - Compass API endpoint
     * @param opts - Optional request headers
     * @returns A detailed response object as a Promise
     * 
     * @example
     * ```
     * client.get<Contact[]>('/contacts').then(function(res){
     *      if (res.success) {
     *          //This endpoint returns an array of contact elements
     *          res.result.forEach( (index) => { document.write(index.ContactId); } );
     *      } else {
     *          //Something went wrong
     *          document.write('<h2>Error</h2><div>' + res.message + '</div>');
     *      }
     * });
     * ```
     * 
     */
    public async get<T>(url: string, opts: IRequestOptions = {showErrors: true}): Promise<IGetResponse<T>> {
        
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
}