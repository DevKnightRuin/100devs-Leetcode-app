// import db from '../data/db';

const displayContainer = document.getqueryselector('#displaycontainer')

document.onload(loadItems) 
console.log(db)
function loadItems(){

    db.forEach(element => {
        const newitem = document.createElement('div')
        const diff = document.createElement('span')
        diff.innerHTML = element.difficulty
        const link = document.createElement('span')
        link.innerHTML = element.link
        const author = document.createElement('span')
        author.innerHTML = element.author
        displayContainer.appendChild(author)
        displayContainer.appendChild(link)
        displayContainer.appendChild(diff)
        
        console.log(element)
        
    });
}