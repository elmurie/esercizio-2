import '@scssFolder/async/accordion.scss'

let accordion = document.querySelector('[data-component="accordion"]');
let ul = document.createElement('ul');
ul.className = 'accordion__ul';
accordion.appendChild(ul);
for ( let i = 0; i < 5; i++ ) {
    let li = document.createElement('li');
    li.className = 'accordion__ul__li';
    ul.appendChild(li);
    li.innerHTML = `Click to open item #${i + 1}`;
    li.addEventListener("click", (el) => {
        let subpanel = document.createElement("div")
        subpanel.className = "accordion__ul__li--subpanel";
        li.appendChild(subpanel);
    })
}

console.log("Accordion chunk successfully loaded");