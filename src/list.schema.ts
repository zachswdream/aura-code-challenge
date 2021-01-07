import { Schema } from 'dynamoose';

export const ListSchema = new Schema({
  zip: {
    type: String,
  },
  type: {
    type: String,
  },
  primary_city: {
    type: String,
  },
//   acceptable_cities: {
//     type: NULL || String,
//   },
//   unacceptable_cities: {
//     type: String || Object,
//   },
  state: {
    type: String,
  },
  county: {
    type: String,
  },
  timezone: {
    type: String,
  },
//   area_codes: {
//     type: String,
//   },
  latitude: {
    type: String,
  },
  longitude: {
    type: String,
  },
  country: {
    type: String,
  },
  estimated_population: {
    type: String,
  },
});
