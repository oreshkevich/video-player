// Получаем видео

const video = document.getElementById('video');

// Получаем кнопки

const play = document.getElementById('play');
const sound = document.getElementById('sound');

// Получаем заголовок и автора

const title = document.getElementById('video-title');
const author = document.getElementById('video-author');

// Массив с видео

const playlist = ['video1', 'video2', 'video3', 'video4'];

// Массив с названиями

const titles = [
  'Название видео 1',
  'Название видео 2',
  'Название видео 3',
  'Название видео 4',
];

// Массив с авторами

const authors = ['Автор 1', 'Автор 2', 'Автор 3', 'Автор 4'];

// Номер текущего видео

let number = 0;

// Функция Play / Pause

function playVideo() {
  if (video.paused) {
    video.play();

    play.innerHTML = 'Пауза';
  } else {
    video.pause();

    play.innerHTML = 'Плей';
  }
}

// Функция включения и выключения звука

function soundVideo() {
  if (video.muted) {
    video.muted = false;

    sound.innerHTML = 'Выключить звук';
  } else {
    video.muted = true;

    sound.innerHTML = 'Включить звук';
  }
}

// Функция обновления видео

function changeVideo() {
  video.src = `video/${playlist[number]}.mp4`;

  title.innerHTML = titles[number];

  author.innerHTML = authors[number];

  video.load();

  video.play();

  play.innerHTML = 'Пауза';
}

// Функция переключения вперёд

function nextVideo() {
  if (number < playlist.length - 1) {
    number++;
  } else {
    number = 0;
  }

  changeVideo();
}

// Функция переключения назад

function prevVideo() {
  if (number > 0) {
    number--;
  } else {
    number = playlist.length - 1;
  }

  changeVideo();
}
