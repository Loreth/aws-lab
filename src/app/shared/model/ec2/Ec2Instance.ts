export interface Ec2InstanceResponse {
  readonly id: string;
  readonly name: string | null;
  readonly imageId: string;
  readonly type: string;
  readonly state: string;
}

export class Ec2Instance {
  readonly id: string;
  readonly name: string | undefined;
  readonly imageId: string;
  readonly type: string;
  readonly state: string;

  constructor(response: Ec2InstanceResponse) {
    this.id = response.id;
    this.name = response.name !== null ? response.name : undefined;
    this.imageId = response.imageId;
    this.type = response.type;
    this.state = response.state;
  }
}
