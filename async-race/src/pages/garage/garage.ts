import footerRace from '../../components/footer/footer';
import panelCar from '../../components/panelCar/panelCar';
import './style.css';

function getGarage() {
  const arr = [1, 2, 3, 4];
  const garage = document.createElement('main');
  garage.classList.add('main-container');
  garage.innerHTML = `
    <section class='garage-container-inputs'>
      <div class='box-inputs'>
        <label><input type='text' class='inputs-text'></label>
        <label><input type="color"></label>
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
    </section>
    <section class='garage-container-text'>
      <div class='text-box'>
        <h1>Garage</h1>
        <span class='count-car'>0</span>
      </div>
      <div class='text-box'>
        <h3>Page</h3>
        <span>#1</span>
      </div>
    </section>
    <section class='garage-container-playground'>
    </section>
  `;

  const playground = garage.querySelector('.garage-container-playground');

  arr.forEach(() => {
    playground?.append(panelCar());
  });
  garage.append(footerRace);
  return garage;
}

const pageGarage = getGarage();
export default pageGarage;
