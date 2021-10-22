import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Ec2Instance, Ec2InstanceResponse} from "../../shared/model/ec2/Ec2Instance";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {EC2, getEndpointUrl} from "../../shared/rest-api-urls";
import {
  Ec2CreateRequest,
  Ec2StartRequest,
  Ec2StopRequest,
  Ec2TerminateRequest
} from "../../shared/model/ec2/Ec2Requests";

@Injectable({
  providedIn: 'root'
})
export class Ec2Service {

  constructor(private http: HttpClient) { }

  getInstances(): Observable<Ec2Instance[]> {
    const url = `${getEndpointUrl(EC2)}/`

    return this.http.get<Ec2InstanceResponse[]>(url).pipe(
      map(responses => responses.map(response => new Ec2Instance(response)))
    );

  }

  createInstance(request: Ec2CreateRequest): Observable<Ec2Instance> {
    const url = `${getEndpointUrl(EC2)}/create`;

    return this.http.post<Ec2InstanceResponse>(url, request).pipe(
      map(response => new Ec2Instance(response))
    );
  }

  stopInstance(request: Ec2StopRequest): Observable<void> {
    const url = `${getEndpointUrl(EC2)}/stop`;

    return this.http.post<void>(url, request);
  }

  startInstance(request: Ec2StartRequest): Observable<void> {
    const url = `${getEndpointUrl(EC2)}/start`;

    return this.http.post<void>(url, request);
  }

  terminateInstance(request: Ec2TerminateRequest): Observable<void> {
    const url = `${getEndpointUrl(EC2)}/terminate`;

    return this.http.post<void>(url, request);
  }
}
