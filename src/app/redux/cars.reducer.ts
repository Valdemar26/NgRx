import { Car } from '../car.model';
import { AddCar, CAR_ACTION } from './cars.action';

const initialState = {
  cars: [
    new Car('Ford', '12.12.2012', 'Focus', false, 1),
    new Car('Audi', '08.08.2018', 'A8', true, 2)
  ]
};

export function carsReducer(state = initialState, action: AddCar) {
  switch (action.type) {
    case CAR_ACTION.ADD_CAR:
      return {
        ...state,
        cars: [...state.cars, action.payload]
      };
    default:
      return state;
  }
}
