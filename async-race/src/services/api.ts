import { URL } from '../store/constants';
import { CreatedCar } from '../store/types';

export const getCars = async () => {
  try {
    const response = await fetch(`${URL}/garage`);
    const json = await response.json();
    return json;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const createCar = async (data: CreatedCar) => {
  try {
    const response = await fetch(`${URL}/garage`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    });
    const json = await response.json();
    return json;
  } catch (error) {
    return Promise.reject(error);
  }
};
