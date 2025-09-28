function openLetter() {
  const letter = document.querySelector('.letter');
  letter.classList.add('open');
  showHearts();
}

function resetLetter() {
  document.querySelector('.letter').classList.remove('open');
  document.querySelector('.hearts').innerHTML = ''; // clear hearts
}

function showHearts() {
  const heartsContainer = document.querySelector('.hearts');
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = `${Math.random() * 100 - 50}px`;
    heart.style.top = `${Math.random() * 20 - 10}px`;
    heart.style.animationDelay = `${Math.random() * 0.5}s`;
    heartsContainer.appendChild(heart);
  }

  setTimeout(() => {
    heartsContainer.innerHTML = '';
  }, 2000);
}

function openLetter() {
  const letter = document.querySelector('.letter');
  letter.classList.add('open');
  showHearts();

  const audio = document.getElementById("bg-music");
  audio.play();
}
