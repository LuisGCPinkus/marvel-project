const orderBy = ['name', 'modified', '-name', '-modified'];

export interface ListFilterParams {
  name?: string;
  nameStartsWith?: string;
  modifiedSince?: string;
  comics?: string;
  series?: string;
  events?: string;
  stories?: string;
  orderBy?: string;
  limit?: string;
  offset?: string;
}

export interface ListFilter {
  name?: string;
  nameStartsWith?: string;
  modifiedSince?: Date;
  comics?: number;
  series?: number;
  events?: number;
  stories?: number;
  orderBy?: string;
  limit?: number;
  offset?: number;
}