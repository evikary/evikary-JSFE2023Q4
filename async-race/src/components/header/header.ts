import { changePageAction } from '../../store/actions';
import store from '../../store/store';
import './style.css';

function createHeader() {
  const header = document.createElement('header');
  header.classList.add('header');
  header.innerHTML = `
    <div class='header-box-btns'>
        <button class='header-btn garage'>to garage</button>
        <button class='header-btn winners'>to winners</button>
    </div>
  `;

  const garage = header.querySelector('.garage');
  const winners = header.querySelector('.winners');

  garage?.addEventListener('click', () => {
    store.dispatch(changePageAction('garage'));
  });

  winners?.addEventListener('click', () => {
    store.dispatch(changePageAction('winners'));
  });

  return header;
}

const headerRace = createHeader();
export default headerRace;
