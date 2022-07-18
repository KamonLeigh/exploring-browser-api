const card = document.querySelector('.card')
const map = document.getElementById('map')

if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
        console.log('position', position);
        map.src = `https://maps.google.com?q=${position.coords.latitude},${position.coords.longitude}&output=embed`
    }, (err) => {
        map.remove()
        const errorMessage = document.createElement('p');
        errorMessage.textContent = "Error" + err.message
        card.appendChild(errorMessage)
    })
    
} else {
    map.remove();
}