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


  bearer = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIzUFQ0dldiNno5MnlQWk1EWnBqT1U0RjFVN0lwNi1ELUlqQWVGczJPbGU0In0.eyJleHAiOjE2NzU5MzY5MjQsImlhdCI6MTY3NTkzMzMyNCwianRpIjoiODBiMzQ5YWItZDQxMS00YzIxLWEzNjItZTBhNWFiOTA2ZmZjIiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay5zenV0LmRldi9hdXRoL3JlYWxtcy9zenV0IiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjU1NDZjZDIxLTk4NTQtNDMyZi1hNDY3LTRkZTNlZWRmNTg4OSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImVtcGxveWVlLW1hbmFnZW1lbnQtc2VydmljZSIsInNlc3Npb25fc3RhdGUiOiIwNTI4NDc1ZC00Y2Y4LTRkMGMtOWYxZS0wMjA5N2IyMGQzM2QiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwiZGVmYXVsdC1yb2xlcy1zenV0IiwidW1hX2F1dGhvcml6YXRpb24iLCJ1c2VyIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJlbWFpbCBwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInByZWZlcnJlZF91c2VybmFtZSI6InVzZXIifQ.OChNzK6And7MS-DAosR7C94oHYtBuzWkTTwZJ1JlF1HZcK-LILSMvIM4bv2hmw_CtxuSrfQTU7oGXO1xUl_zHIdLkNYJ0gZT9DXAMNGXh7D4OLDC79kJTA-H2-eWAoxAL6u-3LZ6LOUrXv2QIoE-Y_uLRF6OGRMthwilEzNIE1Fe2Evo9xk6IciWNouJVbiT7HyBqn_369C9Ycb3WDJWJJC_kUIZlRa3yvDiomfJ3nW1_V1HrxRab2ByCR1YUtkDe3SOktXnINWU75TaGqUDjnERPfsrW28Rjpi0S-D7p8xLEJEWhDBzVa9xOhJE_4Su16YpVGRCYyZas9lsHI7j0A';
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
