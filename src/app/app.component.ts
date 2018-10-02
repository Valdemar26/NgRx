import { Component, OnInit } from '@angular/core';
import { Car, Cars } from './car.model';
import { Store, select } from '@ngrx/store';
import { AppState } from './redux/app.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public cars: Car[] = [
    // new Car('Ford', '12.12.2012', 'Focus', false, 1),
    // new Car('Audi', '08.08.2018', 'A8', true, 2)
  ];

  public carState: Observable<Cars>;

  constructor(private store: Store<AppState>) {

  }

  ngOnInit() {
    this.carState = this.store.pipe(select('carPage'));
  }

  onDelete(car: Car) {
    this.cars = this.cars.filter(c => c.id !== car.id);
  }

}
