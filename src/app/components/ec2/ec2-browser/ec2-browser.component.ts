import { Component, OnInit } from '@angular/core';
import {Ec2Instance} from "../data/Ec2Instance";
import {Observable} from "rxjs";
import {Ec2Service} from "../../../core/services/ec2.service";
import {Ec2StartRequest, Ec2StopRequest, Ec2TerminateRequest} from "../data/Ec2Requests";

@Component({
  selector: 'app-ec2-browser',
  templateUrl: './ec2-browser.component.html',
  styleUrls: ['./ec2-browser.component.scss']
})
export class Ec2BrowserComponent implements OnInit {

  instances$!: Observable<Ec2Instance[]>;

  constructor(private ec2Service: Ec2Service) { }

  ngOnInit(): void {
    this.instances$ = this.ec2Service.getInstances();
  }

  createInstance() {
    this.ec2Service.createInstance({name: "nowa nazwa"}).toPromise().then(() => {
      this.instances$ = this.ec2Service.getInstances();
    })
  }

  stopInstance(event: Ec2StopRequest) {
    this.ec2Service.stopInstance(event);
  }

  startInstance(event: Ec2StartRequest) {
    this.ec2Service.startInstance(event);
  }

  terminateInstance(event: Ec2TerminateRequest) {
    this.ec2Service.terminateInstance(event);
  }
}
