import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/toPromise';

import { AppState } from './redux/app.state';
import { Car } from './car.model';
import { AddCar, DeleteCar, LoadCars, UpdateCar } from './redux/cars.action';



@Injectable()
export class CarsService {

  static BASE_URL = 'http://localhost:3000/';

  constructor(
    private http: HttpClient,
    private store: Store<AppState>) {

  }

  preloadCars(): Observable<Car[]> {
    this.http.get(CarsService.BASE_URL + 'cars');
  }

  loadCars(): void {
    this.preloadCars()
      .toPromise()
      .then( (cars: Car[]) => {
        this.store.dispatch(new LoadCars(cars));
      });
  }

  addCar(car: Car) {
    this.http.post(CarsService.BASE_URL + 'cars', car)
      .toPromise()
      .then((car: Car) => {
        this.store.dispatch(new AddCar(car));
      });
  }

  deleteCar(car: Car) {
    this.http.delete(CarsService.BASE_URL + 'cars/' + car.id)
      .toPromise()
      .then(_ => {
        this.store.dispatch(new DeleteCar(car));
      });
  }

  updateCar(car: Car) {
    this.http.put(CarsService.BASE_URL + 'cars/' + car.id, car)
      .toPromise()
      .then((car: Car) => {
        this.store.dispatch(new UpdateCar(car));
      });
  }
}
