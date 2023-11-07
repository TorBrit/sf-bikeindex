import { BikeDetailModel, BikeModel, BikesCount } from './bike-model';

export interface PagedResult {
  data: BikeModel[];
  entryCount: number;
  range: EntryRange;
  mayHaveNextPage: boolean;
}

interface EntryRange {
  from: number;
  to: number;
}

export interface ApiResponse {
  bike?: BikeDetailModel;
  bikes?: BikeModel[];
  count?: BikesCount;
}
