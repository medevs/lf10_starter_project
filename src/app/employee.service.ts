import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Employee} from "./Employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  addNewEmployee(employee: Employee)  {
    let bearerToken = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIzUFQ0dldiNno5MnlQWk1EWnBqT1U0RjFVN0lwNi1ELUlqQWVGczJPbGU0In0.eyJleHAiOjE2NzY0NjQ1MDMsImlhdCI6MTY3NjQ2MDkwMywianRpIjoiYWJkMmFlZmYtOWRhZC00ZjU1LTlhYWYtNGZlOGNhNjEzYzA1IiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay5zenV0LmRldi9hdXRoL3JlYWxtcy9zenV0IiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjU1NDZjZDIxLTk4NTQtNDMyZi1hNDY3LTRkZTNlZWRmNTg4OSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImVtcGxveWVlLW1hbmFnZW1lbnQtc2VydmljZSIsInNlc3Npb25fc3RhdGUiOiIzYWMzNDE3Yi00MzQzLTQwMTktODAxYS1jMGQ0ZTIzN2M1MjYiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwiZGVmYXVsdC1yb2xlcy1zenV0IiwidW1hX2F1dGhvcml6YXRpb24iLCJ1c2VyIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJlbWFpbCBwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInByZWZlcnJlZF91c2VybmFtZSI6InVzZXIifQ.CBhLAphWJbWc14BLbiye0gpXJdIGRHBIJZDpKB5qjKOSt2Lu8fizkYgF6Z9G1_AtOkDLKiG3n_qP7_dYDp0JzmKi-0xOX8I_N0tYvifAbnyCEARcIH3c4Pd6BxHLLxlmGQyV0Ns62HUPk6K4Fbw-Gi4-12co3TMFroyIRuYIxjQpWd78BGSSdxaHwX8Uv7IW9khsPPdKdfawE9-Jx9pfe06gnCCgZ7G9invPYekhulYbekVjxZAjYhrl8EoKTmhF8hFfxYudZxb-SKN4qYzrpbi8mn_oyc75mDfOefi8NxILkm8bnYeuGjadpJpgKxDHjjYLnyRiyzOzbBu_3Yc1kA';
    return this.http.post<Employee>('/api/add-employee', JSON.stringify(employee), {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${bearerToken}`)
    });
  }

  deleteEmployee(id: string) {
    let bearerToken = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIzUFQ0dldiNno5MnlQWk1EWnBqT1U0RjFVN0lwNi1ELUlqQWVGczJPbGU0In0.eyJleHAiOjE2NzY0NjQ1MDMsImlhdCI6MTY3NjQ2MDkwMywianRpIjoiYWJkMmFlZmYtOWRhZC00ZjU1LTlhYWYtNGZlOGNhNjEzYzA1IiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay5zenV0LmRldi9hdXRoL3JlYWxtcy9zenV0IiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjU1NDZjZDIxLTk4NTQtNDMyZi1hNDY3LTRkZTNlZWRmNTg4OSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImVtcGxveWVlLW1hbmFnZW1lbnQtc2VydmljZSIsInNlc3Npb25fc3RhdGUiOiIzYWMzNDE3Yi00MzQzLTQwMTktODAxYS1jMGQ0ZTIzN2M1MjYiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwiZGVmYXVsdC1yb2xlcy1zenV0IiwidW1hX2F1dGhvcml6YXRpb24iLCJ1c2VyIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJlbWFpbCBwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInByZWZlcnJlZF91c2VybmFtZSI6InVzZXIifQ.CBhLAphWJbWc14BLbiye0gpXJdIGRHBIJZDpKB5qjKOSt2Lu8fizkYgF6Z9G1_AtOkDLKiG3n_qP7_dYDp0JzmKi-0xOX8I_N0tYvifAbnyCEARcIH3c4Pd6BxHLLxlmGQyV0Ns62HUPk6K4Fbw-Gi4-12co3TMFroyIRuYIxjQpWd78BGSSdxaHwX8Uv7IW9khsPPdKdfawE9-Jx9pfe06gnCCgZ7G9invPYekhulYbekVjxZAjYhrl8EoKTmhF8hFfxYudZxb-SKN4qYzrpbi8mn_oyc75mDfOefi8NxILkm8bnYeuGjadpJpgKxDHjjYLnyRiyzOzbBu_3Yc1kA';
    return this.http.delete(`/api/delete-employee/${id}`,{
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${bearerToken}`)
    }).subscribe();
  }

  editEmployee(e: Employee) {
    let bearerToken = sessionStorage.getItem("bearerToken");
    return this.http.put<Employee>(`/api/edit-employee/${e.id}`, JSON.stringify(e), {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${bearerToken}`)
    });
  }
}
