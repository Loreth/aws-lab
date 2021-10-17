import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Ec2Instance, Ec2InstanceResponse} from "../../components/ec2/Ec2Instance";
import {Observable, of} from "rxjs";
import {map} from "rxjs/operators";
import {EC2, getEndpointUrl} from "../../shared/rest-api-urls";

@Injectable({
  providedIn: 'root'
})
export class Ec2Service {

  constructor(private http: HttpClient) { }

  getInstances(): Observable<Ec2Instance[]> {
    return of([new Ec2Instance({id: "xdd", name: "nazwa", imageId: "xdddddd", state: "RUNNING", type: "t2.micro"})])

    /*return this.http.get<Ec2InstanceResponse[]>(getEndpointUrl(EC2)).pipe(
      map(responses => responses.map(response => new Ec2Instance(response)))
    );*/
  }
}
