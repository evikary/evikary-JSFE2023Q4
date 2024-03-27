import { AllActions } from './actions';
import { CHANGE_PAGE, GET_CARS_FAILED, GET_CARS_SUCCESS, START_GAME } from './constants';
import { StateData } from './types';

export const initialState: StateData = {
  viewPage: 'garage',

  cars: [],
  carsFailed: false,
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
        cars: action.payload,
      };
    case GET_CARS_FAILED:
      return {
        ...state,
        carsFailed: true,
      };
    default:
      return state;
  }
};
