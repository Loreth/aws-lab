import {environment} from '../../environments/environment';

export const ID = '/{id}';
export const BUCKET = '/buckets';

export function getEndpointUrl(endpoint: string): string {
  return environment.apiUrl + endpoint;
}
