export interface LocationFilterParams {
  city: string;
  province?: string;
  country?: string;
}

export interface QueryParams {
  location: LocationFilterParams,
  pageSize: number,
  pageNumber: number,
}
