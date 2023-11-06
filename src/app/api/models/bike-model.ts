export interface BikeResponseModel {
  bike?: BikeDetailModel;
  bikes?: BikeModel[];
  count?: BikesCount;
}

export interface BikeModel {
  id: number;
  url: string;
  title: string;

  description?: string;
  year?: number;

  manufacturer_name: string;
  serial: string;
  frame_colors: string[];
  frame_model?: string;

  stolen: boolean;
  status: BikeStatus;
  date_stolen?: number;
  stolen_coordinates?: number[];
  stolen_location?: string;
  location_found?: string;

  large_img?: string;
  thumb?: string;
  is_stock_image: boolean;

  external_id?: number;
  registry_name?: string;
  registry_url?: string;

  // https://bikeindex.org/documentation/api_v3#!/selections
  propulsion_type_slug: string;
  cycle_type_slug: string;
}

export interface BikeDetailModel extends BikeModel {
  registration_created_at: number;
  registration_updated_at: number;

  manufacturer_id?: number;
  name?: string;
  additional_registration?: string;
  components: string[];
}

export interface BikesCount {
  proximity: number;
  stolen: number;
  non: number;
}

type BikeStatus = 'stolen' | 'with owner' | 'found';
