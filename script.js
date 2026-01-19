const songImage = document.getElementById("song-img");
const songName = document.getElementById("Song-name");
const songSiner = document.getElementById("singer");
const songSlider = document.getElementById("slide-music");
const backBtn = document.getElementById("back-btn");
const playBtn = document.getElementById("playp-btn");
const nextBtn = document.getElementById("next-btn");

const songs = [
  {
    image: "./img1.png",
    name: "Demi Lovato",
    singer: "Selena Gomez",
    audio: "./m1.mp3",
  },
  {
    image: "./img2.png",
    name: "Baby ft. Ludacris",
    singer: "Justin Bieber",
    audio: "./m2.mp3",
  },
  {
    image: "./img3.png",
    name: "Demi Lovato 2",
    singer: "Shimmers in Gold",
    audio: "./m3.mp3",
  },
];
const audio = document.createElement("audio");
let currentSongIndex = 0;
updateSong();

backBtn.addEventListener("click", function () {
  if (currentSongIndex == 0) {
    return;
  }
  currentSongIndex--;
  updateSong();
});

nextBtn.addEventListener("click", function () {
  if (currentSongIndex == songs.length - 1) {
    return;
  }
  currentSongIndex++;
  updateSong();
});

playBtn.addEventListener("click", function () {
  if (!audio.paused) {
    audio.pause();
  } else {
    audio.play();
  }
});

function updateSong() {
  const song = songs[currentSongIndex];
  songImage.src = song.image;
  songName.innerText = song.name;
  songSiner.innerText = song.singer;
  audio.src = song.audio;
  audio.onloadedmetadata = function () {
    songSlider.value = 0;
    songSlider.max = audio.duration;
  };
}

songSlider.addEventListener("change", function () {
  audio.currentTime = songSlider.value;
});

function moveSlider() {
  songSlider.value = audio.currentTime;
}

setInterval(moveSlider, 1000);