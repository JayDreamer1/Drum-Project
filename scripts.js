window.addEventListener('keydown', makeSound);

function makeSound(e) {
    const playAudio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    if(!playAudio) return
    playAudio.currentTime = 0;
    playAudio.play();
}