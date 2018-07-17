
const playSound = (e) => {
	const audio = document.querySelector(`audio[data-key="${e}"]`);
	const key = document.querySelector(`.key[data-key="${e}"]`);
	if(!audio){ return;	}
	audio.currentTime = 0;
	audio.play();
	key.classList.add('active-class');
	setTimeout(() => {
		key.classList.remove('active-class');
	},100)
}

const key = document.querySelectorAll(".key");
key.forEach(key => {
	key.addEventListener("click", function(e){
	const aud = e.target.parentElement.dataset.key;
	playSound(aud);
} )});

window.addEventListener('keydown', (e)=>{
	playSound(e.keyCode);
});