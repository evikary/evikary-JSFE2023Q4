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

  return header;
}

const headerRace = createHeader();
export default headerRace;
