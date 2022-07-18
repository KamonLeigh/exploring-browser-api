const open_button = document.getElementById('open')
const container = document.getElementById('img-container')
const save_button = document.getElementById('save')
const editor = document.getElementById('editor')

let file_handle

async function getFile() {
    let response = await window.showOpenFilePicker({
        types: [{
            description: 'Svg Images',
            accept: {
                "image/svg": ['.svg']
            }
        }],
        excludeAcceptAllOption: true,
        multiple: false 
    })

    console.log('response', response)
    file_handle = response[0]

    if (file_handle.kind === 'file') {
        const file = await file_handle.getFile()
        console.log('file', file)
        const contents = await file.text()
        console.log('contents', contents)
        container.innerHTML = contents
        editor.value = contents
        editor.disabled = false
        save_button.disabled = false 
    }
    
}

async function saveFile(params) {
    // Taking our handle and creating writable
    const writable = await file_handle.createWritable()
    await writable.write(editor.value)
    await writable.close()
    alert("Saved!!")
}


open_button.addEventListener('click', getFile)
save_button.addEventListener('click', saveFile)

editor.addEventListener('change', () => {
    container.innerHTML = editor.value
})