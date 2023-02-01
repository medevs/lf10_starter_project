import { Component, OnInit } from '@angular/core';
import {Observable, of} from "rxjs";
import {Employee} from "../Employee";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  bearer = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIzUFQ0dldiNno5MnlQWk1EWnBqT1U0RjFVN0lwNi1ELUlqQWVGczJPbGU0In0.eyJleHAiOjE2NzUyNjI5NTQsImlhdCI6MTY3NTI1OTM1NCwianRpIjoiYTRjOWU1Y2QtNTk3Zi00MTg4LTlkMDAtZTI4ZjFhMmMzOGQ2IiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay5zenV0LmRldi9hdXRoL3JlYWxtcy9zenV0IiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjU1NDZjZDIxLTk4NTQtNDMyZi1hNDY3LTRkZTNlZWRmNTg4OSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImVtcGxveWVlLW1hbmFnZW1lbnQtc2VydmljZSIsInNlc3Npb25fc3RhdGUiOiI2MGQzMjQwMS02NDUwLTRhZDgtOWM2OC05MDdjOGJkYjUzY2MiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwiZGVmYXVsdC1yb2xlcy1zenV0IiwidW1hX2F1dGhvcml6YXRpb24iLCJ1c2VyIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJlbWFpbCBwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInByZWZlcnJlZF91c2VybmFtZSI6InVzZXIifQ.NCUE4wjoFtnDoUCJn5iJkCbwaLvFUswzu1lmmouRN-H1-TSd9CmAEHUeMZBx6zrLKtgXYxev8zEvMx8D9j6ScMu13F7Cu5jBSwRNgjCxMtVc1_vyf-2G6gKOn7aixWU9op0K9ZWZqQX961pymEdfvzjAbd_rfA_ZCeKpWG_whMYvI3NQoecMn45uTD_4IGsNFEKCm2q_-f7uCt0xyyEQpGE-n6TvDZ_OHKDPdviJq_qj4H-_qgYzgtlXtToYtthqqqkRVs0c1pXwm2grYnypivFsFVcu_wMXqg4Y5P0M7HEj3vvfKBQph8HiHcNzu68nFj7ZII9gUvSFZOLGYjnkgw';
  employees$: Observable<Employee[]>;

  constructor(private http: HttpClient) {
    this.employees$ = of([]);
    this.fetchData();
  }

  fetchData() {
    this.employees$ = this.http.get<Employee[]>('/backend', {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${this.bearer}`)
    });
  }

}
