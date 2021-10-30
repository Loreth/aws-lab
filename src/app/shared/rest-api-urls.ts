import {environment} from '../../environments/environment';

export const LOGIN = '/login';
export const BUCKET = '/buckets';
export const EC2 = '/ec2';
export const POLLY = '/polly';
export const COMPREHEND = '/comprehend';
export const TRANSLATION = '/translation';
export const REKOGNITION_LABELLING = '/rekognition/labelling';
export const TEXTRACT = '/textract';
export const LOGGING = '/logging';

export function getEndpointUrl(endpoint: string): string {
  return environment.apiUrl + endpoint;
}
