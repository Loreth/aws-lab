import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Ec2Instance} from "../../../shared/model/ec2/Ec2Instance";
import {Ec2StartRequest, Ec2StopRequest, Ec2TerminateRequest} from "../../../shared/model/ec2/Ec2Requests";

@Component({
  selector: 'app-ec2-instance',
  templateUrl: './ec2-instance.component.html',
  styleUrls: ['./ec2-instance.component.scss']
})
export class Ec2InstanceComponent {

  @Input() instance!: Ec2Instance;

  @Output() stopInstance = new EventEmitter<Ec2StopRequest>();
  @Output() startInstance = new EventEmitter<Ec2StartRequest>();
  @Output() terminateInstance = new EventEmitter<Ec2TerminateRequest>();

  emitStopInstance() {
    this.stopInstance.emit({instanceId: this.instance.id});
  }

  emitStartInstance() {
    this.startInstance.emit({ instanceId: this.instance.id });
  }

  emitTerminateInstance() {
    this.terminateInstance.emit({instanceId: this.instance.id});
  }

}
