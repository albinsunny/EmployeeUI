import { Component, Inject, PLATFORM_ID } from '@angular/core';
import {AgGridModule} from  'ag-grid-angular';
import { ColDef, GridOptions } from 'ag-grid-community';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeeformComponent } from '../employeeform/employeeform.component';

export interface Employee{
  id: number
  name: string
  email: string
}

@Component({
  selector: 'app-employeegrid',
  imports: [AgGridModule, CommonModule, FormsModule, EmployeeformComponent],
  templateUrl: './employeegrid.component.html',
  styleUrl: './employeegrid.component.css'
})

export class EmployeegridComponent {

  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

employees: Employee[] = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
  { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com' },
  { id: 4, name: 'Bob Brown', email: 'bob.brown@example.com' },
  { id: 5, name: 'John Doe', email: 'john.doe@example.com' },
  { id: 6, name: 'Jane Smith', email: 'jane.smith@example.com' },
  { id: 7, name: 'Alice Johnson', email: 'alice.johnson@example.com' },
  { id: 8, name: 'Bob Brown', email: 'bob.brown@example.com' },
  { id: 9, name: 'John Doe', email: 'john.doe@example.com' },
  { id: 10, name: 'Jane Smith', email: 'jane.smith@example.com' },
  { id: 11, name: 'Alice Johnson', email: 'alice.johnson@example.com' },
  { id: 12, name: 'Bob Brown', email: 'bob.brown@example.com' }
];

// Currently selected employee
selectedEmployee: Employee | null = null;
isFormVisible: boolean = false;
gridApi: any

onGridReady(params: any) {
  this.gridApi = params.api; // Store the grid API
}

columnDefs: ColDef<Employee>[] = [
  { headerName: 'ID', field: 'id', sortable: true, filter: true },
  { headerName: 'Name', field: 'name', sortable: true, filter: true },
  { headerName: 'Email', field: 'email', sortable: true, filter: true }
];

gridOptions: GridOptions = {
  paginationPageSize: 20,
  domLayout: 'autoHeight'
};

onDelete() {
  if (this.selectedEmployee) {
    this.deleteEmployee(this.selectedEmployee.id); // Delete the selected employee
    this.selectedEmployee = null;                 // Clear selection
  }
}

onAdd(){
  this.selectedEmployee = null; // Clear selection for new employee
  this.isFormVisible = true; 
}

onEdit() {
  if (this.selectedEmployee) {
    this.isFormVisible = true; // Show the form with pre-filled data
  }
}

handleSave(employee: Employee) {
  
  if (employee.id) {
    this.editEmployee(employee); // Update existing employee
  } else {
    this.addEmployee(employee); // Add new employee
  }
  this.isFormVisible = false; // Hide the form after saving
}


// Deletes an employee by ID
deleteEmployee(employeeId: number) {
  this.employees = this.employees.filter(e => e.id !== employeeId);
}

// Add a new employee
private addEmployee(newEmployee: Employee) {
  const nextId = this.employees.length > 0 ? Math.max(...this.employees.map(e => e.id)) + 1 : 1;
  newEmployee.id = nextId;
  console.log("-------------HERE----------------------")
  console.log(newEmployee)
  console.log(this.employees.length)
  this.employees.push(newEmployee);
  this.employees =this.employees
  //console.log(this.employees.length)
 // this.refreshGrid()

}

private editEmployee(updatedEmployee: Employee) {
  const index = this.employees.findIndex(e => e.id === updatedEmployee.id);
  if (index !== -1) {
    this.employees[index] = updatedEmployee;
  }
}

refreshGrid() {
  if (this.gridApi) {
    this.gridApi.setRowData(this.employees); // Update the grid data
  }
}


}
