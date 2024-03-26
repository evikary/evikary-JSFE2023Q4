import { AllActions } from './actions';
import { CHANGE_PAGE, START_GAME } from './constants';
import { StateData } from './types';

export const initialState: StateData = {
  viewPage: 'garage',
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
    default:
      return state;
  }
};
