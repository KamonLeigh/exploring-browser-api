const open_button = document.getElementById('open')
const home_button = document.getElementById('home')
const container = document.getElementById('container')
const type= document.getElementById('type')
const size = document.getElementById('size')

let directory_handle
let files = {}
let parent_dir 

open_button.addEventListener('click', openDirectory)

async function openDirectory() {
    directory_handle = await window.showDirectoryPicker()
    console.log(directory_handle)
    showFiles(directory_handle, true)
    
}

async function showFiles(directory_handle, initialize) {
    container.innerHTML = ""
    home_button.disabled = false
    files = {}

    if (initialize) parent_dir = directory_handle

    for await (const [name, handle ] of directory_handle.entries()) {
        console.log(name, handle);
        const path = `${directory_handle.name}/${name}`
        files[path] = {
            path,
            name,
            handle,
            parent: handle
        }

        for (const property in files){
            const file_element = document.createElement('li')
            const file_button = document.createElement('button')
            file_button.innerText = files[property].name;
            file_button.dataset.path = files[property].path;
            file_button.class = 'file'

            file_element.appendChild(file_button)
            container.appendChild(file_element)
        }
    }
    
}

container.addEventListener('click', async (event) => {
    console.log('event', event.composedPath())
    const target = event.composedPath()[0];

    if (target.tagName === 'BUTTON') {
        const selected_file_data = files[target.dataset.path]

        if (selected_file_data.handle.kind === 'file') {
           const selected_file = await selected_file_data.handle.getFile()
           type.value = selected_file.type
           size.value = selected_file.size

        } else if (selected_file_data.handle.kind === 'directory') {
            showFiles(selected_file_data.handle, false)
            
        }
    }
})

home_button.addEventListener('click', () => {
    container.innerHTML = ''
    files = {}
    showFiles(parent_dir, false)
})