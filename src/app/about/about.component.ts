import { Component } from '@angular/core';
import { TestService } from '../test.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  cars:any;
  constructor(private testService:TestService){
  this.cars=this.testService.Cars;
  }
  addCars():any{
    this.testService.Cars.push("Mazda");
  }
}
