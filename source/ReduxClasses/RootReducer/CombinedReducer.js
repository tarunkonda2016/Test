import {combineReducers} from 'redux';
import PizzaCalculateReducer from '../Reducers/PizzaCalculateReducer';

export default function rootReducer() {
  return combineReducers({
    PizzaCalculateReducer,
  });
}
