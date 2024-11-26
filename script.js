const playMusicButton = document.getElementById('playMusic');
const music = document.getElementById('music');

// Memeriksa apakah musik perlu diputar saat halaman dimuat
if(localStorage.getItem("musicPlaying") === "true") {
  music.play();
  playMusicButton.textContent = '⏸ Pause Song';
}

// Play atau pause musik saat tombol diklik
playMusicButton.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    playMusicButton.textContent = '⏸ Pause Song';
    localStorage.setItem("musicPlaying", "true");
  } else {
    music.pause();
    playMusicButton.textContent = '🎵 Play Song';
    localStorage.setItem("musicPlaying", "false");
  }
});
