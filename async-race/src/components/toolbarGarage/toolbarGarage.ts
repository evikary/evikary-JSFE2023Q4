import getCarsApi from '../../pages/garage/data';
import { createCar, updateCar } from '../../services/api';
import { CREATE_CAR_SUCCESS, UPDATE_CAR, colorsCar, namesCar } from '../../store/constants';
import { selectCurrentPage } from '../../store/selector';
import store from '../../store/store';
import './style.css';

function createToolbar() {
  const toolbar = document.createElement('section');
  toolbar.classList.add('garage-container-inputs');
  toolbar.innerHTML = `
    <div class='box-inputs inputs-create'>
        <label><input type='text' value="" class='inputs-text text-create'></label>
        <label><input type="color" class='color-create'></label>
        <button class='btn-car create-btn'>create</button>
    </div>
    <div class='box-inputs'>
        <input type='hidden' class='hidden-update'>
        <label><input type='text' value="" class='inputs-text text-update'></label>
        <label><input type="color" class='color-update'></label>
        <button class='btn-car update-btn'>update</button>
    </div>
    <div class='box-btns'>
        <button class='settings-btns race-btn'>race</button>
        <button class='settings-btns reset-btn'>reset</button>
        <button class='settings-btns generate-btn'>generate cars</button>
    </div>
  `;

  const createBtn = toolbar.querySelector('.create-btn') as HTMLButtonElement;
  const updateBtn = toolbar.querySelector('.update-btn') as HTMLButtonElement;
  const updateInput = toolbar.querySelector('.text-update') as HTMLInputElement;
  const updateColor = toolbar.querySelector('.color-update') as HTMLInputElement;
  const updateHidden = toolbar.querySelector('.hidden-update') as HTMLInputElement;
  const generateBtn = toolbar.querySelector('.generate-btn') as HTMLButtonElement;

  updateBtn.addEventListener('click', () => handeleUpdateCar());
  createBtn?.addEventListener('click', () => {
    const inputText = toolbar.querySelector('.text-create') as HTMLInputElement;
    const inputColor = toolbar.querySelector('.color-create') as HTMLInputElement;
    const carData = {
      name: inputText.value,
      color: inputColor.value,
    };

    if (inputText.value.trim() === '') {
      return;
    }

    createCar(carData)
      .then((data) => {
        store.dispatch({ type: CREATE_CAR_SUCCESS, payload: data });
        getCarsApi(selectCurrentPage());
        inputText.value = '';
        inputColor.value = '';
      })
      .catch(() => {});
  });

  function handeleUpdateCar() {
    const id = updateHidden.value;
    const updateCarData = {
      name: updateInput.value,
      color: updateColor.value,
    };

    updateCar(updateCarData, id)
      .then((data) => {
        store.dispatch({ type: UPDATE_CAR, payload: data });
        updateInput.value = '';
        updateColor.value = '';
        updateHidden.value = '';
      })
      .catch(() => {});
  }

  generateBtn.addEventListener('click', () => {
    for (let i = 0; i < 100; i++) {
      const index = Math.floor(Math.random() * 10);
      const carRandomData = {
        name: namesCar[index],
        color: colorsCar[index],
      };

      createCar(carRandomData)
        .then((data) => {
          store.dispatch({ type: CREATE_CAR_SUCCESS, payload: data });
          getCarsApi(selectCurrentPage());
        })
        .catch(() => {});
    }
  });

  return toolbar;
}

const toolbarGarage = createToolbar();
export default toolbarGarage;
