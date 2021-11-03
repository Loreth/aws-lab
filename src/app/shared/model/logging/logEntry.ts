export interface LogEntry {
  readonly date: Date;
  readonly ip: string;
  readonly url: string;
  readonly method: string;
  readonly body: any;
}
