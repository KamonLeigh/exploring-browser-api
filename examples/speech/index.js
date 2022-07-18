const synth = window.speechSynthesis;
let speak_button = document.getElementById('speak');
const speak_input = document.getElementById('speak-text');
const stop_button = document.getElementById("stop")

speak_button.addEventListener('click', () => {
    const utterance = new SpeechSynthesisUtterance(speak_input.value);
    // synth.speak(utterance)

    if (synth.paused) {
        synth.resume();
        speack_button.innerText = "Pause Speak"
    } else if (synth.speaking) {
        synth.pause();
        speak_button.innerText = "Resume Speak"
    } else {
        synth.speak(utterance)
        speak_button.innerText = "Pause Speak"
    }

    utterance.addEventListener('end', () => {
        if (!synth.speaking) {
            speak_button.innerText = "Speak Text"
        }
    })


})

stop_button.addEventListener("click", () => {
    synth.cancel()
    speak_button = 'Speak Text'
})