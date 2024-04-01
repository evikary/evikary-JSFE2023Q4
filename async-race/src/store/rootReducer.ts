import { AllActions } from './actions';
import {
  CHANGE_PAGE,
  CREATE_CAR_SUCCESS,
  DELETE_CAR,
  GET_CARS_FAILED,
  GET_CARS_SUCCESS,
  NEXT_PAGE,
  PREV_PAGE,
  START_GAME,
  UPDATE_CAR,
} from './constants';
import { StateData } from './types';

export const initialState: StateData = {
  viewPage: 'garage',

  cars: [],
  totalCars: 0,
  carsFailed: false,
  currentPage: 1,
};

export type RootReducerType = (state: StateData | undefined, action: AllActions) => StateData;

export const rootReducer = (state = initialState, action: AllActions): StateData => {
  switch (action.type) {
    case START_GAME:
      return {
        ...state,
        viewPage: 'garage',
      };
    case CHANGE_PAGE:
      return {
        ...state,
        viewPage: action.payload,
      };
    case GET_CARS_SUCCESS:
      return {
        ...state,
        carsFailed: false,
        cars: action.payload.cars,
        totalCars: action.payload.totalCount,
        currentPage: state.currentPage,
      };
    case GET_CARS_FAILED:
      return {
        ...state,
        carsFailed: true,
      };
    case CREATE_CAR_SUCCESS:
      return {
        ...state,
        // cars: [...state.cars, action.payload],
      };
    case NEXT_PAGE:
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };
    case PREV_PAGE:
      return {
        ...state,
        currentPage: state.currentPage - 1,
      };
    case DELETE_CAR:
      return {
        ...state,
        // cars: state.cars.filter((item) => item.id !== action.payload),
      };
    case UPDATE_CAR:
      return {
        ...state,
        cars: state.cars.map((item) => {
          if (item.id === action.payload.id) {
            return action.payload;
          }
          return item;
        }),
      };
    default:
      return state;
  }
};
