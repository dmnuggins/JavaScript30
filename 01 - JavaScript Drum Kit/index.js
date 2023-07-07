
function playSound(event) {
    // reference element on DOM
    const audio = document.querySelector(`audio[data-key='${event.code}']`);
    const key = document.querySelector(`.key[data-key='${event.code}']`);
    if(!audio) return;
    audio.currentTime = 0; // rewind to start
    audio.play();
    key.classList.add('playing');
}

function removeTransition(event) {
    console.log(event);
    if (event.propertyName !== 'transform') return; // skip if not transform
    // console.log(event.propertyName);
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));


window.addEventListener("keydown", playSound);
