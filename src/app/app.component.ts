import { Component } from '@angular/core';
import { Car, Cars } from './car.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public cars: Car[] = [
    new Car('Ford', '12.12.2012', 'Focus', false, 1),
    new Car('Audi', '08.08.2018', 'A8', true, 2)
  ];

  onAdd(car: Car) {
    // debugger;
    this.cars.push(car);
  }

  onDelete(car: Car) {
    this.cars = this.cars.filter(c => c.id !== car.id);
  }

}
