import footerRace from '../../components/footer/footer';
import panelCar from '../../components/panelCar/panelCar';
import toolbarGarage from '../../components/toolbarGarage/toolbarGarage';
import selectGetCars from '../../store/selector';
import store from '../../store/store';
import './style.css';

function getGarage() {
  const arr = selectGetCars();
  const garage = document.createElement('main');
  garage.classList.add('main-container');
  garage.innerHTML = `
    <section class='garage-container-text'>
      <div class='text-box'>
        <h1>Garage</h1>
        <span class='count-car'>${store.getState().cars.length}</span>
      </div>
      <div class='text-box'>
        <h3>Page</h3>
        <span>#1</span>
      </div>
    </section>
    <section class='garage-container-playground'>
    </section>
  `;

  const playground = garage.querySelector('.garage-container-playground') as HTMLElement;

  garage.prepend(toolbarGarage);

  arr.forEach((item) => {
    playground?.append(panelCar(item));
  });

  garage.append(footerRace);
  return garage;
}

const pageGarage = getGarage;
export default pageGarage;
