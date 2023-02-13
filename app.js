const SettingType = {
  THEME: 'theme-name',
  FONT: 'theme-font',
  FONTSIZE: 'theme-font-size',
};

const audioSaba = new Audio('audio/saba.mp3');
const audioNahawand = new Audio('audio/nahawand.mp3');
const audio3agam = new Audio('audio/3agam.mp3');
const audioBayaty = new Audio('audio/bayaty.mp3');
const audioSika = new Audio('audio/sika.mp3');
const audioHegaz = new Audio('audio/hegaz.mp3');
const audioRast = new Audio('audio/rast.mp3');
const audioKurd = new Audio('audio/kurd.mp3');

const sabaButton = document.getElementById('playSaba');
const agamButton = document.getElementById('playAgam');
const nahawanddButton = document.getElementById('playNahawand');
const bayatyButton = document.getElementById('playBayaty');
const sikaButton = document.getElementById('playSika');
const hegazButton = document.getElementById('playHegaz');
const rastButton = document.getElementById('playRast');
const kurdButton = document.getElementById('playKurd');

sabaButton.addEventListener('click', function () {
  if (audioSaba.paused) {
    audioSaba.play();
  } else {
    audioSaba.pause();
    audioSaba.currentTime = 0;
  }
});

agamButton.addEventListener('click', function () {
  if (audio3agam.paused) {
    audio3agam.play();
  } else {
    audio3agam.pause();
    audio3agam.currentTime = 0;
  }
});

nahawanddButton.addEventListener('click', function () {
  if (audioNahawand.paused) {
    audioNahawand.play();
  } else {
    audioNahawand.pause();
    audioNahawand.currentTime = 0;
  }
});

bayatyButton.addEventListener('click', function () {
  if (audioBayaty.paused) {
    audioBayaty.play();
  } else {
    audioBayaty.pause();
    audioBayaty.currentTime = 0;
  }
});

sikaButton.addEventListener('click', function () {
  if (audioSika.paused) {
    audioSika.play();
  } else {
    audioSika.pause();
    audioSika.currentTime = 0;
  }
});

hegazButton.addEventListener('click', function () {
  if (audioHegaz.paused) {
    audioHegaz.play();
  } else {
    audioHegaz.pause();
    audioHegaz.currentTime = 0;
  }
});

rastButton.addEventListener('click', function () {
  if (audioRast.paused) {
    audioRast.play();
  } else {
    audioRast.pause();
    audioRast.currentTime = 0;
  }
});

kurdButton.addEventListener('click', function () {
  if (audioKurd.paused) {
    audioKurd.play();
  } else {
    audioKurd.pause();
    audioKurd.currentTime = 0;
  }
});
