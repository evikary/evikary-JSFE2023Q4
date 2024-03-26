import './style.css';

function getGarage() {
  const garage = document.createElement('div');
  garage.classList.add('garage');
  garage.textContent = 'Garage';

  return garage;
}

const pageGarage = getGarage();
export default pageGarage;
