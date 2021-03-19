//all variables to manipulate DOM
const audio = document.querySelector('audio');
const prev = document.getElementById('prev');
const play = document.getElementById('play');
const next = document.getElementById('next');
const cover = document.getElementById('cover');
const progress = document.getElementById('progress');
const progressBar = document.getElementById('progress-bar');
const songName = document.getElementById('song');
const likeBtn = document.getElementById('like');
//song var
const songs = ['Meri Ashiqui', 'Bewafaa', 'Dil Chahte Ho'];

let songIndex = 0;
let curTime;
//event listeners
play.addEventListener('click', (e) => {
	if (e.target.classList.contains('fa-play')) {
		loadSong(songs[songIndex]);
		playSong();
		toggleBtn(e.target);
	} else {
		pauseSong();
		toggleBtn(e.target);
	}
});
prev.addEventListener('click', prevSong);
next.addEventListener('click', nextSong);

audio.addEventListener('timeupdate', updateProgress);
audio.addEventListener('ended', nextSong);

progress.addEventListener('click', (e) => {
	let width = (e.offsetX / progress.clientWidth) * audio.duration;
	audio.currentTime = width;
});
// likeBtn.addEventListener('click', () => {
// 	likeBtn.classList.remove('far');
// 	likeBtn.classList.add('fas');
// });

//functions
//play song
function playSong() {
	audio.play();
}

//pause song
function pauseSong() {
	audio.pause();
}
//next song
function nextSong() {
	songIndex++;
	if (songIndex > 2) {
		songIndex = 0;
	}
	loadSong(songs[songIndex]);
	playSong();
}
//prev song
function prevSong() {
	songIndex--;
	if (songIndex < 0) {
		songIndex = songs.length - 1;
	}
	loadSong(songs[songIndex]);
	playSong();
}
//toggle play pause btn
function toggleBtn(btn) {
	if (btn.classList.contains('fa-play')) {
		btn.classList.remove('fa-play');
		btn.classList.add('fa-pause');
	} else {
		btn.classList.remove('fa-pause');
		btn.classList.add('fa-play');
	}
}

//load song
function loadSong(song) {
	audio.setAttribute('src', `songs/${song}.mp3`);
	cover.setAttribute('src', `img/${song}.jpg`);
	songName.innerText = song;
	console.log(song);
}
//progress bar update
function updateProgress() {
	let width = (audio.currentTime / audio.duration) * 100;
	progressBar.style.width = `${width}%`;
	console.log(audio.currentTime);
}
