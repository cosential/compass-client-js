/**
 * Represents the Schema
 * @example Read an endpoint's schema
 * ```
 * client.get<Schema[]>('/contacts/schema').then( (res) => {
 *      if (res.success) { //returns an array of call log elements
 *          res.result.forEach((index) => { console.log(index); });
 *      } else { //something went wrong
 *          console.log(res.message);
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
