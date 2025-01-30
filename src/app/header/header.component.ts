import { Component } from '@angular/core';
import { TestService } from '../test.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  Customer: string[];
  Mobiles:any;
  constructor(public testService: TestService) {
    // Initialize the Customer array with the data from the service
    this.Customer = this.testService.customers;
    this.Mobiles=this.testService.Cars;
  }
  
}
