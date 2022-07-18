const copy_input = document.getElementById("copy-input")
const copy_button = document.getElementById("copy");

copy_button.addEventListener('click', async () => {
    let value = copy_input.value;
    await navigator.clipboard.writeText(value);

    alert(`Copied ${value} to clipboard`);
})

const paste_input = document.getElementById('paste-input')
const paste_button = document.getElementById('paste-input')


if ('readText' in navigator.clipboard) {

    paste_button.disabled = false

    paste_button.addEventListener('click', async() => {
        const value = await navigator.clipboard.readText()
        paste_input.value =  value
    
})

}

