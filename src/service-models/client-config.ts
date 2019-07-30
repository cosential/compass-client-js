import { isUndefined } from "util";

/**
 * Represents the Client configuration in order to authenticate a User.
 */
export class ClientConfig {

  /* private properties */
  private urlTest: RegExp = /^(http|https):\/\/[^ "]+$/;
  private apiKeyTest: RegExp = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;

  /* properties */
  private _apiKey: string = '';
  private _compassUrl: string = 'https://compass.uat.cosential.com/api';
  private _firmId: number = 0;
  private _username: string = '';
  private _password: string = '';

  /* property accessors */

  /**
   * Getter _apiKey
   * @return {_apiKey}
   */
  public get apiKey(): string { return this._apiKey }

  /**
   * Setter _apiKey
   * @param {_apiKey} v
   */
  public set apiKey(v: string) {
    if (!isUndefined(v)) {
      if (!this.apiKeyTest.test(v)) throw new Error(`apiKey config property value [${ v }] is not valid.`);
      this._apiKey = v;
    }
  }

  /**
   * Getter _compassUrl
   * @return {_compassUrl}
   */
  public get compassUrl(): string { return this._compassUrl }

  /**
   * Setter _compassUrl
   * @param {_compassUrl} v
   */
  public set compassUrl(v: string) {
    if (!isUndefined(v)) {
      if (!this.urlTest.test(v)) throw new Error(`compassUrl config property value [${ v }] is not valid.`);
      this._compassUrl = v
    }
  }

  /**
   * Getter _firmId
   * @return {_firmId}
   */
  public get firmId(): number { return this._firmId }

  /**
   * Setter _firmId
   * @param {_firmId} v
   */
  public set firmId(v: number) {
    if (!isUndefined(v)) {
      this._firmId = v
    }
  }

  /**
   * Getter _username
   * @return {_username}
   */
  public get username(): string { return this._username }

  /**
   * Setter _username
   * @param {_username} v
   */
  public set username(v: string) { this._username = v }

  /**
   * Getter _password
   * @return {_password}
   */
  public get password(): string { return this._password }

  /**
   * Setter _password
   * @param {_password} v
   */
  public set password(v: string) { this._password = v }

  constructor(firmId ? : number, username ? : string, password ? : string, apiKey ? : string, compassUrl ? : string) {
    this.apiKey = apiKey;
    this.compassUrl = compassUrl;
    this.firmId = firmId;
    this.username = username;
    this.password = password;
  }
}
