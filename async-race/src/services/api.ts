import { URL } from '../store/constants';

const getCars = async () => {
  try {
    const response = await fetch(`${URL}/garage`);
    const json = await response.json();
    return json;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default getCars;
