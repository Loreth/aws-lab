export interface LogEntryResponse {
  readonly date: Date;
  readonly ip: string;
  readonly url: string;
  readonly method: string;
  readonly username: string;
}
