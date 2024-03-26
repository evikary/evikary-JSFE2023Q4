import './style.css';
import header from './components/header/header';
import pageGarage from './pages/garage/garage';
import store from './store/store';
import pageWinners from './pages/winners/winners';

store.subscribe(render);

function render() {
  const state = store.getState();

  if (state.viewPage === 'garage') {
    document.body.innerHTML = '';
    document.body.append(header);
    document.body.append(pageGarage);
  } else {
    document.body.innerHTML = '';
    document.body.append(header);
    document.body.append(pageWinners);
  }
}

render();
