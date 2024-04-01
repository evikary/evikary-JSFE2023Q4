import store from './store';

export const selectGetCars = () => {
  const state = store.getState();
  return state.cars;
};

export const selectCurrentPage = () => {
  const state = store.getState();
  return state.currentPage;
};

export const selectTotalCars = () => {
  const state = store.getState();
  return state.totalCars;
};
