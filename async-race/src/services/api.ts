import { URL, limitCar } from '../store/constants';
import { CreatedCar } from '../store/types';

export const getCars = async (page: number) => {
  try {
    const response = await fetch(`${URL}/garage?_page=${String(page)}&_limit=${String(limitCar)}`);
    const json = await response.json();
    const count = Number(response.headers.get('X-Total-Count'));
    return { totalCount: count, cars: json };
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

export const deleteCar = async (id: number) => {
  try {
    const response = await fetch(`${URL}/garage/${id}`, {
      method: 'DELETE',
    });
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const updateCar = async (data: CreatedCar, id: string) => {
  try {
    const response = await fetch(`${URL}/garage/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    });
    const json = await response.json();
    return json;
  } catch (error) {
    return Promise.reject(error);
  }
};
