interface Ec2InstanceStateChangeRequest {
  instanceId: string;
}

export interface Ec2CreateRequest {
  name: string;
}

export interface Ec2StartRequest extends Ec2InstanceStateChangeRequest {}
export interface Ec2StopRequest extends Ec2InstanceStateChangeRequest {}
export interface Ec2TerminateRequest extends Ec2InstanceStateChangeRequest {}
