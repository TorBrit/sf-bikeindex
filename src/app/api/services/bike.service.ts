import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Injectable } from '@angular/core';

import { LocationFilterParams, QueryParams } from '../models/query-params';
import { BikeModel } from '../models/bike-model';

// TODO: to environment
const baseUrl = 'bikeindex.org/api/v3/';
const getBikesError = 'GET_BIKES';

@Injectable({
  providedIn: 'root',
})
export class BikeService {
  constructor(private http: HttpClient) { }

  private buildLocationQuery(params: LocationFilterParams) {
    const values = Object.values(params);
    return values.length > 0 ? values.join(',') : '';
  }

  getBikes(params: QueryParams): Observable<BikeModel[]> {
    const options = {
      params: new HttpParams()
        .append('page', params.pageNumber)
        .append('per_page', params.pageSize)
        .append('stolenness', 'proximity')
        .append('distance', 1)
        .append('location', this.buildLocationQuery(params.location)),
    };

    return this.http.get<BikeModel[]>(`${baseUrl}/search`, options)
      .pipe(
        catchError(this.handleError<BikeModel[]>(getBikesError, []))
      );
  }

  getBikeDetails(id: number): Observable<BikeModel> {
    return this.http.get<BikeModel>(`${baseUrl}/bikes/${id}`);
  }

  // TODO: create mother class? + is this the most modern way to handle these errors?
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`); // TODO: dedicated logger
      return of(result as T);
    };
  }
}
