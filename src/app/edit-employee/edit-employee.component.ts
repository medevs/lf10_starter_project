import {Component, EventEmitter, Output} from '@angular/core';
import {Employee} from "../Employee";
import {Router} from "@angular/router";
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent {
  @Output()
  editEmployee: EventEmitter<Employee> = new EventEmitter<Employee>();
  msgError = '';
  msgSuccess = '';

  constructor(
    private employeeService: EmployeeService, private router: Router
  ) {
  }


  ngOnInit(): void {
  }

  edit(employee: Employee) {
    this.editEmployee.emit(employee);
  }

  editEmployeeData(e: Employee) {
    this.msgError = '';
    this.msgSuccess = '';
    this.employeeService.editEmployee(e)
      .subscribe(emp => {
          if (this.msgError ===  '') {
            this.msgSuccess = 'Changes were saved successfully';
          }
          this.editEmployee.emit(emp)
        });
  }

}
