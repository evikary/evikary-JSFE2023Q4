import './style.css';

function getWinners() {
  const winners = document.createElement('div');
  winners.classList.add('winners');
  winners.textContent = 'Winners';

  return winners;
}

const pageWinners = getWinners();
export default pageWinners;
