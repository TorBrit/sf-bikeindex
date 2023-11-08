import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { BikeDetailModel, BikeModel } from '../models/bike-model';

import { BikeService } from './bike.service';
import { bikesMockData } from './bike.service.spec.data';
import { environment } from 'src/environments/environment';
import { ApiResponse, PagedResult } from '../models/api-model';
import { QueryParams } from '../models/query-params';

const baseUrl = environment.bikeApiBaseUrl;

describe('BikeService', () => {
  let service: BikeService;

  let mockClient: HttpClient;
  let mockController: HttpTestingController;
  let mockData: BikeDetailModel[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    service = TestBed.inject(BikeService);
    mockClient = TestBed.inject(HttpClient);
    mockController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    mockController.verify();
  });

  describe('service: when getting multiple bikes from request', () => {
    const queryPathBuilder = (params: QueryParams) => {
      return (`?page=${params.pageNumber}`)
        .concat(`&per_page=${params.pageSize}`)
        .concat(`&stolenness=proximity&distance=1`)
        .concat(`&location=${params.location.city}`);
    };

    beforeEach(() => {
      mockData = bikesMockData;
    });

    it('can return valid response', () => {
      const testParams: QueryParams = {
        location: { city: '' },
        pageNumber: 1,
        pageSize: 10,
      };

      const requestUrl = `${baseUrl}/search${queryPathBuilder(testParams)}`;

      const mockResult: PagedResult = {
        data: mockData,
        mayHaveNextPage: false,
        entryCount: mockData.length,
        range: {
          from: 1,
          to: mockData.length,
        },
      };

      service.getBikes$(testParams).subscribe((result) => {
        expect(result).toEqual(mockResult);
      });

      const mockRequest = mockController.expectOne(requestUrl);
      expect(mockRequest.request.method).toEqual('GET');

      mockRequest.flush({ bikes: mockData });
    });

    it('returns `mayHaveNextPage` is `true` when returned bikes is `<= pageSize`', () => {
      const pageSize = 2;
      mockData.splice(pageSize, mockData.length - pageSize);

      if (mockData.length <= 1) {
        fail(`mockdata length not sufficient for test: expected ${pageSize}, got ${mockData.length}`);
      }

      const testParams: QueryParams = {
        location: { city: 'Delft' },
        pageNumber: 1,
        pageSize: pageSize,
      };

      const requestUrl = `${baseUrl}/search${queryPathBuilder(testParams)}`;

      const mockResult: PagedResult = {
        data: mockData,
        mayHaveNextPage: true,
        entryCount: pageSize,
        range: {
          from: 1,
          to: pageSize,
        },
      };

      service.getBikes$(testParams).subscribe((result) => {
        expect(result).toEqual(mockResult);
      });

      const mockRequest = mockController.expectOne(requestUrl);
      expect(mockRequest.request.method).toEqual('GET');

      mockRequest.flush({ bikes: mockData });
    });
  });

  describe('httpclient: when getting multiple bikes from request', () => {
    const requestUrl = `${baseUrl}/search`;

    beforeEach(() => {
      mockData = bikesMockData;
    });

    it('can return request without params', () => {
      mockClient.get<ApiResponse>(requestUrl).subscribe((data) => {
        expect(data).toEqual({
          bikes: mockData,
        });
      });

      const mockRequest = mockController.expectOne(requestUrl);
      expect(mockRequest.request.method).toEqual('GET');

      mockRequest.flush({ bikes: mockData });
    });
  });

  describe('httpclient: when getting bike by id', () => {
    let mockSingleData: BikeDetailModel;
    const baseMockUrl = `${baseUrl}/bikes`;

    beforeEach(() => {
      mockSingleData = mockData[0];
    });

    it('can get one bike by valid id', () => {
      const requestUrl = `${baseMockUrl}/${mockSingleData.id}`;

      mockClient.get<ApiResponse>(requestUrl).subscribe((data) => {
        expect(data).toEqual({
          bike: mockSingleData,
        });
      });

      const mockRequest = mockController.expectOne(requestUrl);
      expect(mockRequest.request.method).toEqual('GET');

      mockRequest.flush({ bike: mockSingleData });
    });

    // it('should return a 404 if data not found', () => {

    // })
  });
});
