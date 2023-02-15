import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Employee} from "./Employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  addNewEmployee(employee: Employee)  {
    let bearerToken = sessionStorage.getItem("bearerToken");
    debugger;
    return this.http.post<Employee>('/api/add-employee', JSON.stringify(employee), {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${bearerToken}`)
    });
  }
}
