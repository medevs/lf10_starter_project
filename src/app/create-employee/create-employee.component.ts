import { Component } from '@angular/core';
import { Employee } from 'src/app/Employee';
import { EmployeeService } from '../employee.service';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {

  msgError = '';
  msgSuccess = '';
  public employee: Employee;
  @Output()
  addNewUser: EventEmitter<Employee> = new EventEmitter<Employee>();

  constructor(private employeeService: EmployeeService) {
    this.employee = new Employee();
  }

  ngOnInit(): void {
  }

  save() {
    this.msgError = '';
    this.msgSuccess = '';
    this.employeeService.addNewEmployee(this.employee)
      .subscribe(emp =>{
          this.addNewUser.emit(emp);
          this.msgSuccess = 'Mitarbeiter wurde erfolgreich hinzugefügt';
          this.employee = new Employee();
        });
  }

}
