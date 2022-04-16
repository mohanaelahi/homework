(function(){
const categories =[{title:"people",url:" https://swapi.dev/api/people"},
{title:"films",url:" https://swapi.dev/api/films"},
{title:"Starships",url:"https://swapi.dev/api/starships"},
{title:"planets",url:"https://swapi.dev/api/planets"}]
let app = document.getElementById("app");

function createCategorylinks() {
    let links = categories.map(category=> {
        let link = document.createElement("a");
        link.innerText = category.title;
        link.onclick = ()=>{
           getData (category.url).then(data => {
            renderListItem(data.results, data.next, data.previous);
           })
        };
        return link;
    });
    let menu = document.createElement("div")
    menu.classList.add("menu-container");
    links.forEach(link => menu.appendChild(link));
    app.appendChild(menu);
}

async function getData(url){
let response = await fetch (url);
return await response.jason();
}

function renderListItem (data, next, previous){
    let container = document.getElementById("container");
    container && container.remove();
    container = document.createElementById("div");
    container.id = "container"

    let rows = data.map(d=>{
        let row = document.createElement("div");
        let cols = Object.values(d).map(c =>{

        })
        
        return row;
    });
    rows.forEach(r=>container.appendChild(r));
    app.appendChild(container);
}
createCategorylinks ();

})()