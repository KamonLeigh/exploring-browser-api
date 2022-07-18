const share_button = document.querySelector('#share')
const share_link = document.getElementById('share-link')


const text = document.getElementById('text').value
share_button.addEventListener('click', async () => {
    const shareData = {
        title: "Shared from website",
        text,
        url: "https://www.google.com/"
    }

    await navigator.share(shareData)
})


let isMobileAgent
if (/Android|webOS|iPhone|iPad|BlackBerry|IEMobile|Oprea Mini/i.test(navigator.userAgent)) {
    isMobile = true
} else {
    isMobile = false 
}

const isMobileSize = window.matchMedia("only screen and max-width: 768px").matches

const isTouch = "ontouchstart" in document.documentElement

if ('share' in navigator) {
    // Check o see if on mobile or touch device

    if (isMobileAgent && isMobileSize && isTouch) {
        share_button.disabled = false
        share_link.style.display = "none"
        
    } else {
        initializeFallback()
    }
    // Make button active

} else {
    //share_button.textContent = 'Your browser does not suppourt the Web Share API'
    initializeFallback()
}

function initializeFallback() {
    share_button.style.display = 'none'
    share_link.href = `https://twitter.com/share?url=${window.location.href}&text=${text.value}`
}
