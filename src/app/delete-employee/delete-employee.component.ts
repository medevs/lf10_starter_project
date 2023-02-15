import {Component, EventEmitter, Output} from '@angular/core';
import {Employee} from "../Employee";
import { EmployeeService } from '../employee.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent {

  @Output()
  deleteEmployee: EventEmitter<Employee> = new EventEmitter<Employee>();

  constructor(
    private employeeService: EmployeeService, private router: Router
  ) {
  }

  delete(employee: Employee) {
    this.employeeService.deleteEmployee(employee.id!.toString());
    this.deleteEmployee.emit(employee);
    this.router.navigateByUrl('/employee');
  }

}
