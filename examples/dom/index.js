const findMe = document.querySelector('#find_me')
console.log('find_me', findMe)
const findById = document.getElementById('find_me')
console.log('find_by_id', findById)

const change_me = document.getElementById('change_me')

change_me.innerText = 'I have changed'

const add_html = document.getElementById('add_html')

add_html.innerHTML = "<h3>This added via javascript</h3>"

const find_all = document.querySelectorAll('.change-all');
console.log(find_all)

find_all.forEach((item, index) => {
   item.innerText = "Added from forEach - " + index
})