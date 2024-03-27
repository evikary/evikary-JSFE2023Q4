import store from './store';

const selectGetCars = () => {
  const state = store.getState();
  return state.cars;
};

export default selectGetCars;
