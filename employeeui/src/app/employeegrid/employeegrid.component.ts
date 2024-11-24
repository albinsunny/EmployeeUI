import { Component, Inject, PLATFORM_ID } from '@angular/core';
import {AgGridModule} from  'ag-grid-angular';
import { ColDef, GridOptions } from 'ag-grid-community';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';

interface Employee{
  id: number
  name: string
  email: string
}

@Component({
  selector: 'app-employeegrid',
  imports: [AgGridModule, CommonModule],
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
  { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
  { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com' },
  { id: 4, name: 'Bob Brown', email: 'bob.brown@example.com' },
  { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
  { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com' },
  { id: 4, name: 'Bob Brown', email: 'bob.brown@example.com' }
];
columnDefs: ColDef<Employee>[] = [
  { headerName: 'ID', field: 'id', sortable: true, filter: true },
  { headerName: 'Name', field: 'name', sortable: true, filter: true },
  { headerName: 'Email', field: 'email', sortable: true, filter: true }
];

gridOptions: GridOptions = {
  paginationPageSize: 10,
  domLayout: 'autoHeight'
};


}
