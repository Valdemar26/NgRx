import { Car } from '../car.model';
import { CAR_ACTION, CarsAction } from './cars.action';
import {st} from '@angular/core/src/render3';

const initialState = {
  cars: [
    new Car('Ford', '12.12.2012', 'Focus', false, 1),
    new Car('Audi', '08.08.2018', 'A8', true, 2)
  ]
};

export function carsReducer(state = initialState, action: CarsAction) {
  switch (action.type) {
    case CAR_ACTION.ADD_CAR:
      return {
        ...state,
        cars: [...state.cars, action.payload]
      };
    case CAR_ACTION.DELETE_CAR:
      return {
        ...state,
        cars: [...state.cars.filter(c => c.id !== action.payload.id)]
      };
    case CAR_ACTION.UPDATE_CAR:
      const index = state.cars.findIndex(c => c.id === action.payload.id);
      state.cars[index].isSold = true;
      return {
        ...state,
        cars: [...state.cars]
      };
    default:
      return state;
  }
}
