import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Employee } from '../employeegrid/employeegrid.component';


@Component({
  selector: 'app-employeeform',
  imports: [FormsModule],
  templateUrl: './employeeform.component.html',
  styleUrl: './employeeform.component.css'
})
export class EmployeeformComponent {
  @Input() employee: Employee  | null = null; // Passed from the parent component
  @Output() close = new EventEmitter<void>();    // Emits an event to close the form
  @Output() save = new EventEmitter<Employee>(); // Emits the employee data on save
  

  // Form data bound to the input fields
  formData: Employee = {
    id: 0, // Default ID; will be set by the parent component for new employees
    name: '',
    email: ''
  };

  ngOnInit() {
    // If editing an employee, prefill the form
    if (this.employee) {
      this.formData = { ...this.employee };
    }
  }

  onSubmit() {
    // Emit the form data to the parent component
    this.save.emit(this.formData);
  }

  onClose() {
    // Emit an event to close the form without saving
    this.close.emit()
  }
}
