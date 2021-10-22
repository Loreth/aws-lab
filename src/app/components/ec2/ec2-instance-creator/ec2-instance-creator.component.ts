import {Component, EventEmitter, Output} from '@angular/core';
import {Ec2CreateRequest} from "../../../shared/model/ec2/Ec2Requests";

@Component({
  selector: 'app-ec2-instance-creator',
  templateUrl: './ec2-instance-creator.component.html',
  styleUrls: ['./ec2-instance-creator.component.scss']
})
export class Ec2InstanceCreatorComponent {

  @Output() onCreateRequest = new EventEmitter<Ec2CreateRequest>();

  instanceName = "";

  emitCreateRequest() {
    this.onCreateRequest.emit({
      name: this.instanceName
    });
  }
}
