import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Ec2Instance, Ec2InstanceResponse} from "../../components/ec2/data/Ec2Instance";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {EC2, getEndpointUrl} from "../../shared/rest-api-urls";
import {
  Ec2CreateRequest,
  Ec2StartRequest,
  Ec2StopRequest,
  Ec2TerminateRequest
} from "../../components/ec2/data/Ec2Requests";

@Injectable({
  providedIn: 'root'
})
export class Ec2Service {

  constructor(private http: HttpClient) { }

  getInstances(): Observable<Ec2Instance[]> {
    console.log("hello from get instances!");

    return this.http.get<Ec2InstanceResponse[]>(getEndpointUrl(EC2)).pipe(
      map(responses => responses.map(response => new Ec2Instance(response)))
    );

  }

  createInstance(request: Ec2CreateRequest): Observable<string> {
    console.log("hello from createInstance!");

    const url = `${getEndpointUrl(EC2)}/create`;

    return this.http.post<string>(url, request);
  }

  stopInstance(request: Ec2StopRequest): Observable<void> {
    console.log("hello from stop instance!");

    const url = `${getEndpointUrl(EC2)}/stop`;

    return this.http.post<void>(url, request);
  }

  startInstance(request: Ec2StartRequest): Observable<void> {
    console.log("hello from start instance!");

    const url = `${getEndpointUrl(EC2)}/start`;

    return this.http.post<void>(url, request);
  }

  terminateInstance(request: Ec2TerminateRequest): Observable<void> {
    console.log("hello terminate instance!");

    const url = `${getEndpointUrl(EC2)}/terminate`;

    return this.http.post<void>(url, request);
  }
}
