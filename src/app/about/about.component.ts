import { Component } from '@angular/core';
import { TestService } from '../test.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']  // Fix this to "styleUrls" (plural)
})
export class AboutComponent {
  cars: any;
  products: any[] = [];  // Declare products array to hold API data

  constructor(private testService: TestService, public http: HttpClient) {
    this.cars = this.testService.Cars;
  }

  addCars(): any {
    this.testService.Cars.push("Mazda");
  }

  getData(): void {
    this.http.get('https://fakestoreapi.com/products?limit=5')
      .subscribe((data: any) => {
        console.log(data);
        this.products = data;  // Store the response data in products array
      });
  }
}
