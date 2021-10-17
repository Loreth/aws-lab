import {environment} from '../../environments/environment';

export const ID = '/{id}';
export const BUCKET = '/buckets';
export const EC2 = '/ec2';

export function getEndpointUrl(endpoint: string): string {
  return environment.apiUrl + endpoint;
}
