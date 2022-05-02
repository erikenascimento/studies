//It will listen to the keydown event and then will call a function
window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //using ES6
    const key = document.querySelector(`key[data-key="${e.keyCode}"]`); //will do the same but for the key effect
    if(!audio) return; //stop the function when no audio was found for that key.
    audio.currentTime = 0; // will enable the audio to be spammed
    audio.play(); //if there's an audio, this will play it
});