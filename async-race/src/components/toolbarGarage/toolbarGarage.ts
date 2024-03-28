import { createCar } from '../../services/api';
import { CREATE_CAR_SUCCESS } from '../../store/constants';
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
        <label><input type='text' class='inputs-text'></label>
        <label><input type="color"></label>
        <button class='btn-car update-btn'>update</button>
    </div>
    <div class='box-btns'>
        <button class='settings-btns race-btn'>race</button>
        <button class='settings-btns reset-btn'>reset</button>
        <button class='settings-btns generate-btn'>generate cars</button>
    </div>
  `;

  const createBtn = toolbar.querySelector('.create-btn');

  createBtn?.addEventListener('click', () => {
    const inputText = toolbar.querySelector('.text-create') as HTMLInputElement;
    const inputColor = toolbar.querySelector('.color-create') as HTMLInputElement;
    const carData = {
      name: inputText.value,
      color: inputColor.value,
    };

    createCar(carData)
      .then((data) => {
        store.dispatch({ type: CREATE_CAR_SUCCESS, payload: data });
        inputText.value = '';
        inputColor.value = '';
      })
      .catch(() => {});
  });

  return toolbar;
}

const toolbarGarage = createToolbar();
export default toolbarGarage;
