const dinoCards = document.getElementsByClassName('dino');

const showHighlight = (e) => {
  const dinoType = e.target;
  dinoType.classList.add('bright-color');
};

const hideHighlight = (e) => {
  const dinoType = e.target;
  dinoType.classList.remove('bright-color');
};

const addEvents = () => {
  for (let i = 0; i < dinoCards.length; i++) {
    dinoCards[i].addEventListener('mouseenter', showHighlight);
    dinoCards[i].addEventListener('mouseleave', hideHighlight);
  }
};

module.exports = addEvents;
