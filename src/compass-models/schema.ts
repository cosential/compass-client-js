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
