import 'isomorphic-fetch';
import { Base64 } from 'js-base64';
import { RequestOptions, ResponseData } from '..';
import { ClientConfig } from '../service-models/client-config';


/**
 * The Client service for Cosential Compass API calls.
 */
export class Client {

  private _config: ClientConfig;

  public get config(): ClientConfig {
    return this._config;
  }

  public set config(value: ClientConfig) {
    this._config = value;
  }

  constructor(config: ClientConfig) {
    this.config = config;
  }

  /**
   * @param url - Compass API endpoint
   * @param opts - Optional request headers
   * @param from - Number of elements you would like to skip
   * @param size - Number of elements you would like to receive (max is 500)
   * @param includeDeleted - Include deleted records in GET
   *
   * @returns - A detailed response object as a Promise
   */
  public async get < T > (
    url: string,
    opts: RequestOptions = { showErrors: true },
    from: number = 0,
    size: number = 500,
    includeDeleted: boolean = false
  ): Promise < ResponseData < T >> {
    let headers = {
      'Authorization': this.formatAuthorizationHeader(),
      'x-compass-firm-id': this.config.firmId.toString(),
      'x-compass-api-key': this.config.apiKey,
      'Accept': 'application/json'
    };

    if (opts.showErrors) {
      headers['x-compass-show-errors'] = 'true';
    }

    let requestUrl: string = this.config.compassUrl + url;
    let paging: string = 'from=' + from + '&size=' + size;

    requestUrl += (url.indexOf('?') > -1) ? '&' + paging : '?' + paging;
    if (includeDeleted) {
      requestUrl += '&includedeleted=true';
    }

    let response: Response = await fetch(
      requestUrl, {
        method: 'GET',
        headers: headers
      }
    );

    return this.handleResponse < T > ('GET', response);
  }

  /**
   * @param url - Compass API endpoint
   * @param payload - Array of elements
   * @param opts - Optional request headers
   *
   * @returns - A detailed response object as a Promise
   */
  public async post < T > (
    url: string,
    payload: T,
    opts: RequestOptions = { showErrors: true }
  ): Promise < ResponseData < T >> {
    let headers = {
      'Authorization': this.formatAuthorizationHeader(),
      'x-compass-firm-id': this.config.firmId.toString(),
      'x-compass-api-key': this.config.apiKey,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    if (opts.showErrors) {
      headers['x-compass-show-errors'] = 'true';
    }

    let response: Response = await fetch(
      this.config.compassUrl + url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(payload)
      }
    );

    return this.handleResponse < T > ('POST', response);
  }

  /**
   * @param url - Compass API endpoint with a valid Id
   * @param payload - Updated element including new and existing values
   * @param opts - Optional request headers
   *
   * @returns - A detailed response object as a Promise
   */
  public async put < T > (
    url: string,
    payload: T,
    opts: RequestOptions = { showErrors: true }
  ): Promise < ResponseData < T >> {
    let headers = {
      'Authorization': this.formatAuthorizationHeader(),
      'x-compass-firm-id': this.config.firmId.toString(),
      'x-compass-api-key': this.config.apiKey,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    if (opts.showErrors) {
      headers['x-compass-show-errors'] = 'true';
    }

    let response: Response = await fetch(
      this.config.compassUrl + url, {
        method: 'PUT',
        headers: headers,
        body: JSON.stringify(payload)
      }
    );

    return this.handleResponse < T > ('PUT', response);
  }

  /**
   * @param url - Compass API endpoint with a valid Id
   * @param opts - Optional request headers
   *
   * @returns - A detailed response object as a Promise
   */
  public async delete < T > (
    url: string,
    opts: RequestOptions = { showErrors: true }
  ): Promise < ResponseData < T >> {
    let headers = {
      'Authorization': this.formatAuthorizationHeader(),
      'x-compass-firm-id': this.config.firmId.toString(),
      'x-compass-api-key': this.config.apiKey
    };

    if (opts.showErrors) {
      headers['x-compass-show-errors'] = 'true';
    }

    let response: Response = await fetch(
      this.config.compassUrl + url, {
        method: 'DELETE',
        headers: headers
      }
    );

    return this.handleResponse < T > ('DELETE', response);
  }

  /**
   * @param url - Compass API endpoint
   * @param queryString - Complete search query
   * @param from - Number of elements you would like to skip
   * @param size - Number of elements you would like to receive (max is 500)
   * @param includeDeleted - Include deleted records in search
   * @param opts - Optional request headers
   *
   * @returns - A detailed response object as a Promise
   */
  public async search < T > (
    url: string,
    queryString: string,
    fields: string = null,
    from: number = 0,
    size: number = 500,
    includeDeleted: boolean = false,
    opts: RequestOptions = { showErrors: true }
  ): Promise < ResponseData < T >> {
    let searchQuery: string = (queryString != null) ? queryString.trim() : queryString;
    if (searchQuery == '' || searchQuery == null) {
      throw new Error('Compass API call failed. String to search ' + searchQuery + ' is empty or invalid.');
    }

    let requestUrl: string = url + '/search';

    let searchParams: any = {
      queryString: searchQuery,
      fields: fields,
      includeDeleted: includeDeleted,
      Size: size,
      From: from
    }

    return await this.post < T > (requestUrl, searchParams, opts);
  }

  
  /**
   * Note: This function should only be used to search endpoints which do not have
   * search via POST implemented, e.g. /emails. All other searches should be performed
   * via the above search function.
   * 
   * @param url - Compass API endpoint
   * @param queryString - Complete search query
   * @param opts - Optional request headers
   *
   * @returns - A detailed response object as a Promise
   */
  public async getSearch < T > (
    url: string,
    queryString: string,
    opts: RequestOptions = { showErrors: true }
  ): Promise < ResponseData < T >> {
    let searchQuery: string = (queryString != null) ? queryString.trim() : queryString;
    if (searchQuery == '' || searchQuery == null) {
      throw new Error('Compass API call failed. String to search ' + searchQuery + ' is empty or invalid.');
    }

    let requestUrl: string = url + '/search?q=' + searchQuery;

    return await this.get < T > (requestUrl, opts);
  }

  /**
   * @param url - Compass API endpoint
   * @param queryString - Complete search query
   * @param includeDeleted - Include deleted records in search
   * @param fields - Comma-separated fields to return
   * @param opts - Optional request headers
   *
   * @returns - A detailed response object as a Promise
   */
  public async searchForAll < T > (url: string, queryString: string, fields: string = null, includeDeleted: boolean = false, opts: RequestOptions = {
    showErrors: true
  }): Promise < ResponseData < T[] >> {

    let finished: boolean = false;
    let data: T[] = [];

    let from: number = 0;
    let size: number = 500;

    while (!finished) {
      let res: ResponseData < T > = await this.search < T > (url, queryString, fields, from, size, includeDeleted, opts);

      if (res.status == 200) {
        if (Object.keys(res.result).length > 0) {
          for (let index = 0; index < Object.keys(res.result).length; index++) {
            data.push(res.result[index]);
          }
          from += size;
        } else {
          finished = true;
        }
      } else {
        return {
          success: res.success,
          status: res.status,
          error: res.error,
          message: res.message,
          result: null
        };
      }
    }

    return {
      success: true,
      status: 200,
      error: null,
      message: null,
      result: data
    };
  }

  /**
   * @param responseType - An HTTP verb
   * @param response - The response object
   *
   * @returns - A detailed response object as a Promise
   */
  private async handleResponse < T > (responseType: string, response: Response): Promise < ResponseData < T > > {
    let responseCode: number = response.status;
    let responseText: string = response.statusText;
    let responseUrl: string = response.url;

    let message: string;
    let data: T = null;
    let error: any = null;

    if (!response.ok) {
      message = 'Compass ' + responseType + ' call failed. [' + responseUrl + '] responded with: [' + responseCode + ' ' + responseText + '] + \n' + response.body;
      try {
        error = await response.json();
      } catch (e) {
        error = null;
      }
    } else {
      message = 'Compass ' + responseType + ' call successful. [' + responseUrl + '] responded with: [' + responseCode + ' ' + responseText + ']';
      if (response.status == 200) {
        try {
          data = await response.json();
        } catch (e) {
          error = 'Error parsing response.'
        }
      }
    }

    return {
      success: response.status >= 200 && response.status <= 300,
      status: responseCode,
      error: error,
      message: message,
      result: data
    };
  }

  private formatAuthorizationHeader(): string {
    if (this.config.token) {
      return `Bearer ${this.config.token}`
    } else {
      const encoded = Base64.encode(this.config.username + ':' + this.config.password);
      return `Basic ${encoded}`
    }
  }
}
