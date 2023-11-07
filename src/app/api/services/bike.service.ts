import { BehaviorSubject, Observable, catchError, map, mergeMap, of, shareReplay } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BikeApiResponse, PagedResult } from '../models/bike-model';
import { LocationFilterParams, QueryParams } from '../models/query-params';
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

  getBikes$(params: QueryParams): Observable<PagedResult> {
    return this.http.get<BikeApiResponse>(`${baseUrl}/search`, this.buildHttpParamOptions(params))
      .pipe(
        catchError(this.handleError$<BikeApiResponse>(getBikesOperation, {})),
        map((result) => {
          const bikeCount = result.bikes?.length ?? 0;
          return {
            data: result.bikes ?? [],
            mayHaveNextPage: bikeCount == this.queryParams.pageSize,
            entryCount: bikeCount,
          };
        })
      );
  }

  getBikesCountWithinProximity$(params: QueryParams): Observable<BikeApiResponse> {
    return this.http.get<BikeApiResponse>(`${baseUrl}/search/count`, this.buildHttpParamOptions(params))
      .pipe(
        catchError(this.handleError$<BikeApiResponse>(getBikesOperation, {}))
      );
  }

  getBikeDetails$(id: number): Observable<BikeApiResponse> {
    return this.http.get<BikeApiResponse>(`${baseUrl}/bikes/${id}`)
      .pipe(
        shareReplay(1),
        catchError(this.handleError$<BikeApiResponse>(getDetailsOperation))
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
