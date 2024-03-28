import { getCars } from '../../services/api';
import { GET_CARS_FAILED, GET_CARS_SUCCESS } from '../../store/constants';
import store from '../../store/store';

function getCarsApi() {
  getCars()
    .then((data) => {
      store.dispatch({ type: GET_CARS_SUCCESS, payload: data });
    })
    .catch(() => {
      store.dispatch({ type: GET_CARS_FAILED });
    });
}

export default getCarsApi;
