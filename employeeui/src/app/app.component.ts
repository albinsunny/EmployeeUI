import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeegridComponent } from './employeegrid/employeegrid.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EmployeegridComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'employeeui';
}
