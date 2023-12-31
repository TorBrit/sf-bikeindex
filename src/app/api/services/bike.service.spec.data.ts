import { BikeDetailModel } from '../models/bike-model';

export const bikesMockData: BikeDetailModel[] = [
  {
    id: 1,
    url: 'https://hybrit.org',
    title: 'Gazella 010',
    manufacturer_name: 'Gazella',
    serial: '10203',
    frame_colors: [],
    stolen: true,
    status: 'stolen',
    is_stock_image: false,
    registration_created_at: 0,
    registration_updated_at: 0,
    components: [],
    propulsion_type_slug: 'test',
    cycle_type_slug: 'test',
  },
  {
    id: 2,
    url: 'https://hybrit.org',
    title: 'Superbike Advance',
    manufacturer_name: 'Superbike',
    serial: '252553',
    frame_colors: [],
    stolen: true,
    status: 'stolen',
    is_stock_image: false,
    registration_created_at: 0,
    registration_updated_at: 0,
    components: [],
    propulsion_type_slug: 'test',
    cycle_type_slug: 'test',
  },
  {
    id: 3,
    url: 'https://hybrit.org',
    title: 'Gazella 020',
    manufacturer_name: 'Gazella',
    serial: '55338',
    frame_colors: [],
    stolen: false,
    status: 'with owner',
    is_stock_image: false,
    registration_created_at: 0,
    registration_updated_at: 0,
    components: [],
    propulsion_type_slug: 'test',
    cycle_type_slug: 'test',
  }
];
