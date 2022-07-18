const card = document.querySelector('.card');

const heading = document.createElement('h3');
heading.innerText = 'Hello World'
// card.appendChild(heading);

// ? Inner Text and Inner HTML
// ? Inner Text -> Only text
// ? Inner HTML -> HTML as a string (sanitise it)
// inner html require re-parsing of text, much slower
// If you are making html elements use createElement
// If you are manipualting text use innerText or innerHtml

card.append(heading, "hi")
// ? Append vs Append child 
// ? -> Append -> Nodes , string, doesn't return, multiple items 
// ? Append child -> Node, return node

card.removeChild(heading);

const wrapper = document.createElement("ul");
let poll = ['Boris', 'Michael', 'Resse', 'Nadine']

poll.forEach((member) => {
    const li = document.createElement('li');
    li.innerText = member;
    wrapper.appendChild(li)
});

card.appendChild(wrapper);
