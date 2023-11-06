import { BehaviorSubject, Observable, catchError, mergeMap, of, shareReplay } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { LocationFilterParams, QueryParams } from '../models/query-params';
import { BikeResponseModel } from '../models/bike-model';
import { environment } from 'src/environments/environment';

const baseUrl = environment.bikeApiBaseUrl;

const getBikesOperation = 'GET_BIKES';
const getDetailsOperation = 'GET_BIKE_DETAILS';

@Injectable({
  providedIn: 'root',
})
export class BikeService {
  constructor(private http: HttpClient) { }

  public queryParams: QueryParams = {
    pageNumber: 1,
    pageSize: 10,
    location: {
      city: 'Delft',
    },
  };

  public bikesSubject$ = new BehaviorSubject<void>(undefined); // make private?
  public availableBikes$ = this.bikesSubject$.pipe(
    mergeMap(() => this.getBikes$(this.queryParams)),
    shareReplay(1)
  );

  getBikes$(params: QueryParams): Observable<BikeResponseModel> {
    return this.http.get<BikeResponseModel>(`${baseUrl}/search`, this.buildHttpParamOptions(params))
      .pipe(
        catchError(this.handleError$<BikeResponseModel>(getBikesOperation, {}))
      );
  }

  getBikesCountWithinProximity$(params: QueryParams): Observable<BikeResponseModel> {
    return this.http.get<BikeResponseModel>(`${baseUrl}/search/count`, this.buildHttpParamOptions(params))
      .pipe(
        catchError(this.handleError$<BikeResponseModel>(getBikesOperation, {}))
      );
  }

  getBikeDetails$(id: number): Observable<BikeResponseModel> {
    return this.http.get<BikeResponseModel>(`${baseUrl}/bikes/${id}`)
      .pipe(
        shareReplay(1),
        catchError(this.handleError$<BikeResponseModel>(getDetailsOperation))
      );
  }

  // Helper file or base class?
  private handleError$<T>(operation = 'operation', result?: T) {
    return (error: HttpErrorResponse): Observable<T> => {
       // TODO: 1. inform user + 2. pass correct code to frontend
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private buildLocationQuery(params: LocationFilterParams) {
    const values = Object.values(params);
    return values.length > 0 ? values.join(',') : '';
  }

  private buildHttpParamOptions(params: QueryParams) {
    const options = {
      params: new HttpParams()
        .append('page', params.pageNumber)
        .append('per_page', params.pageSize)
        .append('stolenness', 'proximity')
        .append('distance', 1)
        .append('location', this.buildLocationQuery(params.location)),
    };
    return options;
  }
}
