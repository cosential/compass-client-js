/**
 * The Client configuration used to authenticate the User.
 */
export class ClientConfig {

  private urlTest: RegExp = /^(http|https):\/\/[^ "]+$/;
  private apiKeyTest: RegExp = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;

  private _apiKey: string = '';
  private _compassUrl: string = 'https://compass.uat.cosential.com/api';
  private _firmId: number = 0;
  private _username: string = '';
  private _password: string = '';
  private _token: string = '';

  public get apiKey(): string {
    return this._apiKey;
  }

  public set apiKey(value: string) {
    if (!value || !this.apiKeyTest.test(value)) {
      throw new Error('apiKey config property value [' + value + '] is not valid.');
    } else {
      this._apiKey = value;
    }
  }

  public get compassUrl(): string {
    return this._compassUrl;
  }

  public set compassUrl(value: string) {
    if (!value || !this.urlTest.test(value)) {
      throw new Error('compassUrl config property value [' + value + '] is not valid.');
    } else {
      this._compassUrl = value;
    }
  }

  public get firmId(): number { return this._firmId }

  public set firmId(value: number) {
    if (!value) {
      throw new Error('Please use a valid firmId.');
    } else {
      this._firmId = value;
    }
  }

  public get token(): string {
    return this._token;
  }

  public set token(value: string) {
    this._token = value;
  }

  public get username(): string {
    return this._username;
  }

  public set username(value: string) {
    this._username = value;
  }

  public get password(): string {
    return this._password
  }

  public set password(value: string) {
    this._password = value
  }

  constructor(firmId ? : number, username ? : string, password ? : string, apiKey ? : string, compassUrl ? : string, token ? : string) {
    this.apiKey = apiKey;
    this.compassUrl = compassUrl;
    this.firmId = firmId;
    this.username = username;
    this.password = password;
    this.token = token;
  }
}
