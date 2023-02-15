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


  bearer = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIzUFQ0dldiNno5MnlQWk1EWnBqT1U0RjFVN0lwNi1ELUlqQWVGczJPbGU0In0.eyJleHAiOjE2NzY0NjI4OTgsImlhdCI6MTY3NjQ1OTI5OCwianRpIjoiN2UxOWZhYjctMTBjNy00OTE5LThmMjQtZWY1NDM1NmU1NDcwIiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay5zenV0LmRldi9hdXRoL3JlYWxtcy9zenV0IiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjU1NDZjZDIxLTk4NTQtNDMyZi1hNDY3LTRkZTNlZWRmNTg4OSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImVtcGxveWVlLW1hbmFnZW1lbnQtc2VydmljZSIsInNlc3Npb25fc3RhdGUiOiI1MjQ2YTlhNy02NGU0LTQ5M2QtYWY4Zi05Yzc3ZTM4Y2FlMjMiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwiZGVmYXVsdC1yb2xlcy1zenV0IiwidW1hX2F1dGhvcml6YXRpb24iLCJ1c2VyIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJlbWFpbCBwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInByZWZlcnJlZF91c2VybmFtZSI6InVzZXIifQ.YgbXgeb_WJRKGB_ISlce3OyASzA0sgnS0rS-81eQEt1Mc2PelmO9WPK91SekNoqsMLvZBa08ke3-0Zc-SY2pB788eHH5k2ntWlQxsOsgItFX4CABbfyQLw_VkQd_ZgqPObFs_Gz7cv0xlN6xo3TTBosZXILZlTofcX7Q2QrqeRm0gwC2aHc604hutx5eF-42qVYrmeqaXXvoxwfYdnJB-3xJWAZEbLRDslIokFdiHWAtrKKjFKJGEp0-nMn_g3ySOSp_YkntVZ7XbulCFVIaFmi_YxGrvtPUcD2wFoW17mJZw2f_zszXO2WOQRrHv6Cadn6HQCywwgGCQVYg0aNNqg';
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
