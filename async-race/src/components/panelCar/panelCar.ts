import './style.css';

function createPanelCar() {
  const panel = document.createElement('div');
  panel.classList.add('panel-car');
  panel.innerHTML = `
    <div class='first-box'>
        <button class='panel-btn select'>select</button>
        <button class='panel-btn remove'>remove</button>
        <div class='title-car'>
            <h4 class='brand-car brand'>brand</h4>
            <h4 class='brand-car model'>model</h4>
        </div>
    </div>
    <div class='second-box'>
        <button class='a-b-btns btn-a'>a</button>
        <button class='a-b-btns btn-b'>b</button>
    </div>
    <img class='car'>
    `;

  return panel;
}

const panelCar = createPanelCar;
export default panelCar;
