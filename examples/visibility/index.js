const audio = document.querySelector('#audio')

let hidden
let visibilityChange

if (typeof document.hidden !== 'undefined') {
    hidden = 'hidden'
    visibilityChange = 'visibilitychange' 
} else if (typeof document.msHidden !== 'undefined') {
    hidden = 'msHidden'
    visibilityChange = 'msvisbilitychange'
} else if (typeof document.webkitHidden !== 'undefined') {
    hidden = 'webkitHidden'
    visibilityChange = 'webkitvisbilitychange'
    
}

document.addEventListener(visibilityChange, () => {
    console.log('running')
    if (document[hidden]) {
        document.title = 'Pause'
        audio.pause()
    } else {
        document.title = 'Play'
        audio.play()
    }
})