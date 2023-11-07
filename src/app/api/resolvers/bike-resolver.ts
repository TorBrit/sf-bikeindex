import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { Observable } from 'rxjs';
import { inject } from '@angular/core';

import { BikeApiResponse } from '../models/bike-model';

import { BikeService } from '../services/bike.service';

export const bikeResolver: ResolveFn<Observable<BikeApiResponse>> =
  (route: ActivatedRouteSnapshot) => {
    return inject(BikeService).getBikeDetails$((route.paramMap.get('id') ?? -1) as number);
};
