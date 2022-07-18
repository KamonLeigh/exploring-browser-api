const click_me = document.getElementById('click_me');
const click_value = document.getElementById('click_value')
const change_me = document.getElementById('change_me')
const card = document.querySelector('.card')

console.log(typeof click_value.value);
let value = parseInt(click_value.value);
console.log('value', value)

function clicked() {
    console.log('clicked')
}

click_me.addEventListener('click', () => {
    value += 1;
    click_value.value = value; 
});

change_me.addEventListener('change', () => {
    console.log('change', change_me.value);
});

change_me.addEventListener('blur', () => {
    console.log('blur', change_me.value)
})

change_me.addEventListener('input', (e) => {
    console.log('input', change_me.value)
    console.log(e)
});

change_me.addEventListener('beforeinput', () => {
    console.log('beforeInput', change_me.value)
})

card.addEventListener("click", (e) => {
    console.log(e.target)
})