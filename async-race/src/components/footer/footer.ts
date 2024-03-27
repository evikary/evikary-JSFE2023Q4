import './style.css';

function createFooter() {
  const footer = document.createElement('footer');
  footer.classList.add('footer-btns');
  footer.innerHTML = `
        <button class='footer-btn prev'>prev</button>
        <button class='footer-btn next'>next</button>
  `;

  return footer;
}

const footerRace = createFooter();
export default footerRace;
