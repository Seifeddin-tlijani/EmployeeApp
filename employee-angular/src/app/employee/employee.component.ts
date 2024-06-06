import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';
import { NgForm } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {


  employee: any;

  skills: string[] = [];

  constructor(private employeeService: EmployeeService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.employee = this.activatedRoute.snapshot.data['employee'];
    console.log(this.employee)
  }





  checkSkills(skill: string) {
    return this.employee.employeeSkills != null && this.employee.employeeSkills.includes(skill);
  }

  checkGender(gender: string) {
    return this.employee.employeeGender != null && this.employee.employeeGender.includes(gender);
  }



  saveEmployee(employeeForm: NgForm): void {
    this.employeeService.saveEmployee(this.employee).subscribe({

      next: (res: Employee) => {
        console.log('Employee saved successfully:', res);
        employeeForm.reset()
        this.employee.employeeGender = ''

        this.router.navigate(["/employee-list"])
      },
      error: (error) => {
        console.error('Error saving employee:', error);
      }
    });

  }
  selectGender(gender: string): void {
    this.employee.employeeGender = gender;
  }

  onSkillsChanges(event: any): void {
    console.log(event);
    if (event.checked) {
      this.skills.push(event.source.value);
    } else {
      const index = this.skills.findIndex((item) => item === event.source.value);
      if (index !== -1) {
        this.skills.splice(index, 1);
      }
    }

    // Update employeeSkills with comma-separated values of skills array
    this.employee.employeeSkills = this.skills.toString();
  }
}
