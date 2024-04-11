import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private api = "http://localhost:8083/employees";

  constructor(private httpClient: HttpClient) { }

  public saveEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient.post<Employee>(`${this.api}/save`, employee);
  }
}
