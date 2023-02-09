import { Component } from '@angular/core';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {

  // save() {
  //   this.msgError = '';
  //   this.msgSuccess = '';
  //   this.employeeService.addNewEmployee(this.employee)
  //   .subscribe(emp =>{
  //     this.addNewUser.emit(emp)
  //     this.msgSuccess = 'Mitarbeiter wurde hinzugefügt';
  //     this.employee = new Employee();
  //   },
  //   error =>  this.msgError = error.error.message);
  // }

}
