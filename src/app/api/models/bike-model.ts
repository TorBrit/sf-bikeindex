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

  // List of types can be fetched from api calls
  propulsion_type_slug: string;
  cycle_type_slug: string;
}

type BikeStatus = 'stolen' | 'with owner' | 'found';
