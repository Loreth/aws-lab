import { Component, OnInit } from '@angular/core';
import {Ec2Instance} from "../../../shared/model/ec2/Ec2Instance";
import {Observable} from "rxjs";
import {Ec2Service} from "../../../core/services/ec2.service";
import {Ec2CreateRequest, Ec2StartRequest, Ec2StopRequest, Ec2TerminateRequest} from "../../../shared/model/ec2/Ec2Requests";

@Component({
  selector: 'app-ec2-browser',
  templateUrl: './ec2-browser.component.html',
  styleUrls: ['./ec2-browser.component.scss']
})
export class Ec2BrowserComponent implements OnInit {

  instances$!: Observable<Ec2Instance[]>;
  interval!: number;

  constructor(private ec2Service: Ec2Service) { }

  ngOnInit(): void {
    this.loadInstances();
    this.interval = window.setInterval(() => this.loadInstances(), 5000);
  }

  ngOnDestroy(): void {
    window.clearInterval(this.interval);
  }

  private loadInstances() {
    this.instances$ = this.ec2Service.getInstances();
  }

  createInstance(request: Ec2CreateRequest) {
    this.ec2Service.createInstance(request).toPromise()
      .then(() => {
        this.instances$ = this.ec2Service.getInstances();
      });
  }

  stopInstance(request: Ec2StopRequest) {
    this.ec2Service.stopInstance(request).toPromise()
      .then(() => {
        setTimeout(() => this.loadInstances(), 500);
      });
  }

  startInstance(request: Ec2StartRequest) {
    this.ec2Service.startInstance(request).toPromise()
      .then(() => {
        setTimeout(this.loadInstances, 500);
      });
  }

  terminateInstance(request: Ec2TerminateRequest) {
    this.ec2Service.terminateInstance(request).toPromise()
      .then(() => {
        setTimeout(this.loadInstances, 500);
      });
  }
}
