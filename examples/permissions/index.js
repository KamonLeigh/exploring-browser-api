const get_permissions = document.getElementById('get-permissions')
const perm_status = document.getElementById('status')



if ('permissions' in navigator) {
    get_permissions.disabled = false;

    get_permissions.addEventListener('click', async() => {

    if ('permissions' in navigator) {
        const perrmission_results = await navigator.permissions.query({
            name: "geolocation"
        })
    
        console.log('permission_results', perrmission_results)
        perm_status.innerText = perrmission_results.state

    } else {
        perm_status.innerText = 'Your browser does not support permissions API'
    }
   
})
}



