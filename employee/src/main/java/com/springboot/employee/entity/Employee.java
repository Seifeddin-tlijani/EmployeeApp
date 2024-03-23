package com.springboot.employee.entity;


import jakarta.persistence.*;

@Entity
@Table(name = "employee")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer employeeId;
    private String employeeName;
    private String employeeContractNumber;
    private String employeeAddress;
    private String employeeGender;
    private String employeeDepartement;
    private String employeeSkills;


    public Employee() {

    }

    public Employee(String employeeName, String employeeContractNumber, String employeeAddress, String employeeGender, String employeeDepartement, String employeeSkills) {
        this.employeeName = employeeName;
        this.employeeContractNumber = employeeContractNumber;
        this.employeeAddress = employeeAddress;
        this.employeeGender = employeeGender;
        this.employeeDepartement = employeeDepartement;
        this.employeeSkills = employeeSkills;
    }

    public Integer getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(Integer employeeId) {
        this.employeeId = employeeId;
    }

    public String getEmployeeName() {
        return employeeName;
    }

    public void setEmployeeName(String employeeName) {
        this.employeeName = employeeName;
    }

    public String getEmployeeContractNumber() {
        return employeeContractNumber;
    }

    public void setEmployeeContractNumber(String employeeContractNumber) {
        this.employeeContractNumber = employeeContractNumber;
    }

    public String getEmployeeAddress() {
        return employeeAddress;
    }

    public void setEmployeeAddress(String employeeAddress) {
        this.employeeAddress = employeeAddress;
    }

    public String getEmployeeGender() {
        return employeeGender;
    }

    public void setEmployeeGender(String employeeGender) {
        this.employeeGender = employeeGender;
    }

    public String getEmployeeDepartement() {
        return employeeDepartement;
    }

    public void setEmployeeDepartement(String employeeDepartement) {
        this.employeeDepartement = employeeDepartement;
    }

    public String getEmployeeSkills() {
        return employeeSkills;
    }

    public void setEmployeeSkills(String employeeSkills) {
        this.employeeSkills = employeeSkills;
    }
}
