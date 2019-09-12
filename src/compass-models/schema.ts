/**
 * @example Read an endpoint's schema
 * ```
 * client.get<Schema[]>('/contacts/schema').then(res => {
 *      if (res.success) {
 *          res.result.forEach((nextRes) => { console.log(nextRes.PropertyName); });
 *      }
 * });
 * ```
 */
export interface Schema {
  PropertyName: string,
  Group: string,
  Label: string,
  Description: string,
  Enabled: boolean,
  ReadOnly: boolean,
  Required: boolean,
  DefaultValue: string,
  DataType: string,
  MaxLength: number,
  UnicodeSupported: boolean,
  Searchable: boolean,
  ArrayType: string,
  IsPrimaryKey: boolean,
  IsExternalId: boolean,
  ObjectEndpoint: string,
  IsHidden: boolean
}
