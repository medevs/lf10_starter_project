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

  bearer = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIzUFQ0dldiNno5MnlQWk1EWnBqT1U0RjFVN0lwNi1ELUlqQWVGczJPbGU0In0.eyJleHAiOjE2NzUyNTkxMzUsImlhdCI6MTY3NTI1NTUzNSwianRpIjoiZTJmM2YzNjMtNDMwMy00YjhhLTg5MDUtNDIxYjlhMzJmMDRhIiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay5zenV0LmRldi9hdXRoL3JlYWxtcy9zenV0IiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjU1NDZjZDIxLTk4NTQtNDMyZi1hNDY3LTRkZTNlZWRmNTg4OSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImVtcGxveWVlLW1hbmFnZW1lbnQtc2VydmljZSIsInNlc3Npb25fc3RhdGUiOiI5YWE5YzU2Yy01MDAxLTRkZGItOTVhYi03MTM4NWNhMDgyYTUiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwiZGVmYXVsdC1yb2xlcy1zenV0IiwidW1hX2F1dGhvcml6YXRpb24iLCJ1c2VyIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJlbWFpbCBwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInByZWZlcnJlZF91c2VybmFtZSI6InVzZXIifQ.IzijbEXzKSHPIgmkGEm0qczaHpHMNSCw59-xmycH42fcu6_hGsIWjsL0HkCpNhRC-wGQIgvxLyzVKSPSDTvQDqfV9XRwUEODqXZviMVNd2y8x8Jkk1FO1xL3NVI_dJDHmD-hzQAzTwfHYwPwAZLqOKjWc0TzAKiy4xsSBtX7ANwXMdwbcffo6uz-f19W3t0wx5lHDKgpsDxBuBuJvSQXyVsCxDyEkwQWU0hgs04h994avwuO4uvu9KqDiOr-tVoldZT8UPtR0uAh609C6kLce2e1DeUv0M15tIUX9uiYPInjg2X7l8-vVPX1v4kpR3j3mVqljw1244_qtvooq52ang';
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
