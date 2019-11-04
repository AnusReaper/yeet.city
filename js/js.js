const button = document.querySelector("#button");
const github = document.querySelector("#button2");
const icon = document.querySelector("#button > i");
const audio = document.querySelector("audio");

$(document).ready(function () {
	button.addEventListener("click", () => {
	  if (audio.paused) {
		audio.volume = 1;
		audio.play();
		icon.classList.remove('fa-volume-up');
		icon.classList.add('fa-volume-mute');
		button.classList.add("fade");
		button2.classList.add("fade");
	  } else {
		audio.pause();
		icon.classList.remove('fa-volume-mute');
		icon.classList.add('fa-volume-up');
		button.classList.remove("fade");
		button2.classList.remove("fade");
	  }
	});

	document.addEventListener('contextmenu', event => event.preventDefault());
});

$(function () {
    $('.marquee').marquee({
        duration: 5000,
		pauseOnHover: true
    });
});