import { AllActions, startGameAction } from './actions';
import { RootReducerType } from './rootReducer';
import { StateData, SubcribersType } from './types';

const createStore = (rootReducer: RootReducerType, initialState?: StateData) => {
  let state = rootReducer(initialState, startGameAction());
  const subscribers: SubcribersType[] = [];

  return {
    dispatch(action: AllActions) {
      state = rootReducer(state, action);
      subscribers.forEach((sub) => sub());
    },
    subscribe(callback: () => void) {
      subscribers.push(callback);
    },
    getState() {
      return state;
    },
  };
};

export default createStore;
