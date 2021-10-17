import {Component, Input} from '@angular/core';
import {Ec2Instance} from "../Ec2Instance";

@Component({
  selector: 'app-ec2-instance',
  templateUrl: './ec2-instance.component.html',
  styleUrls: ['./ec2-instance.component.scss']
})
export class Ec2InstanceComponent {

  @Input() instance!: Ec2Instance;

}
