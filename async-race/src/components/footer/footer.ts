import getCarsApi from '../../pages/garage/data';
import { nextPageAction, prevPageAction } from '../../store/actions';
import { limitCar } from '../../store/constants';
import { selectCurrentPage, selectTotalCars } from '../../store/selector';
import store from '../../store/store';
import './style.css';

function createFooter() {
  const footer = document.createElement('footer');
  footer.classList.add('footer-btns');
  footer.innerHTML = `
        <button class='footer-btn prev disabledBtn'>prev</button>
        <button class='footer-btn next'>next</button>
  `;

  const prev = footer.querySelector('.prev') as HTMLButtonElement;
  const next = footer.querySelector('.next') as HTMLButtonElement;

  next.addEventListener('click', () => {
    const totalPages = Math.ceil(selectTotalCars() / limitCar);
    const page = selectCurrentPage();
    if (page === totalPages) {
      next.setAttribute('disabled', 'disabled');
      next.classList.add('disabledBtn');
      getCarsApi(selectCurrentPage());
    } else {
      prev.classList.remove('disabledBtn');
      prev.removeAttribute('disabled');
      store.dispatch(nextPageAction());
      getCarsApi(selectCurrentPage());
    }
  });

  prev.addEventListener('click', () => {
    const page = selectCurrentPage();
    if (page === 1) {
      prev.setAttribute('disabled', 'disabled');
      prev.classList.add('disabledBtn');
      getCarsApi(selectCurrentPage());
    } else {
      next.classList.remove('disabledBtn');
      next.removeAttribute('disabled');
      prev.removeAttribute('disabled');
      store.dispatch(prevPageAction());
      getCarsApi(selectCurrentPage());
    }
  });

  return footer;
}

const footerRace = createFooter();
export default footerRace;
