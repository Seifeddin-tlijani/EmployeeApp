import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee.model';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  dataSource: Employee[] = [];

  displayedColumns: string[] = ['employeeId', 'employeeName', 'employeeContractNumber', 'employeeAddress', 'employeeDepartement', 'employeeGender', 'employeeSkills', 'delete'];



  constructor(private employeeService: EmployeeService) {
    this.getEmployeeList();

  }



  ngOnInit(): void {
  }


  deleteEmployee(employeeId: number): void {
    console.log(employeeId);
    this.employeeService.deletEmployee(employeeId).subscribe(

      {

        next: (res) => {
          console.log(res);
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);

        }



      }


    );
  }




  getEmployeeList(): void {
    this.employeeService.getEmployees().subscribe(

      {
        next: (res: Employee[]) => {
          this.dataSource = res
          console.log(res);
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
        }
      },


    )
  }

}
