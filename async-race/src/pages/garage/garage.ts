import footerRace from '../../components/footer/footer';
import panelCar from '../../components/panelCar/panelCar';
import toolbarGarage from '../../components/toolbarGarage/toolbarGarage';
import selectGetCars from '../../store/selector';
import './style.css';

function getGarage() {
  const arr = selectGetCars();
  const garage = document.createElement('main');
  garage.classList.add('main-container');
  garage.innerHTML = `
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

  arr.forEach((item) => {
    playground?.append(panelCar(item));
  });
  garage.append(footerRace);
  garage.prepend(toolbarGarage);
  return garage;
}

const pageGarage = getGarage;
export default pageGarage;
