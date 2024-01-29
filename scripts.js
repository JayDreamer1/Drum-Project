function makeSound(e) {
    const playAudio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if(!playAudio) return
    key.classList.add('playing')
    playAudio.play();
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    if(this.classList.contains('playing')) this.classList.remove('playing')
}
const btnStatus = document.querySelectorAll('.key');
btnStatus.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', makeSound);
