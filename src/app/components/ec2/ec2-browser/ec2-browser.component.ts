import { Component, OnInit } from '@angular/core';
import {Ec2Instance} from "../Ec2Instance";
import {Observable} from "rxjs";
import {Ec2Service} from "../../../core/services/ec2.service";

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

}
