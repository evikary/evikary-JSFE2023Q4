import footerRace from '../../components/footer/footer';
import panelCar from '../../components/panelCar/panelCar';
import toolbarGarage from '../../components/toolbarGarage/toolbarGarage';
import { selectCurrentPage, selectGetCars, selectTotalCars } from '../../store/selector';
import './style.css';

function getGarage() {
  const arr = selectGetCars();
  const curPage = selectCurrentPage();
  const garage = document.createElement('main');
  garage.classList.add('main-container');
  garage.innerHTML = `
    <section class='garage-container-text'>
      <div class='text-box'>
        <h1>Garage</h1>
        <span class='count-car'>${selectTotalCars()}</span>
      </div>
      <div class='text-box'>
        <h3>Page</h3>
        <span class='page'>#${curPage}</span>
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
