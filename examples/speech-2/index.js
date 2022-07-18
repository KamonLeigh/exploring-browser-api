const synth = window.speechSynthesis;
let speak_button = document.getElementById('speak');
const speak_input = document.getElementById('speak-text');
const stop_button = document.getElementById("stop")
const pitch_input = document.getElementById('pitch')
const speed_input = document.getElementById('speed')

let voices = []

speak_button.addEventListener('click', () => {
    const utterance = new SpeechSynthesisUtterance(speak_input.value);
    const voice = document.getElementById('voice');
    let selectedIndex = voice.selectedIndex

    utterance.voice = voices[selectedIndex]
    utterance.rate = speed_input.value;
    utterance.pitch = pitch_input.value
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


function getVoices() {
    voices = synth.getVoices()
    console.log(voices)
    voices.forEach((voice) => {
        const option = document.createElement('option')
        option.textContent = voice.name + " (" + voice.lang + ")"
        document.getElementById('voice').appendChild(option)
    })
}

getVoices()

// Chrome gotcha 

if (typeof speechSynthesis !== 'undefined' &&
    speechSynthesis.onvoiceschanged !== undefined
) {
    speechSynthesis.onvoiceschanged = getVoices
}