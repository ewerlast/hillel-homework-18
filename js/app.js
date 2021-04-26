let wrapper = document.createElement('div');
wrapper.className = "wrapper";
body.appendChild(wrapper);


function createList(arr) {
    let ul = document.createElement('ul');
    ul.className = "ul-list";
    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = `${arr[i]}`;
        li.style.cursor = "pointer";
        ul.style.display = "none";
        ul.appendChild(li);
    }

    wrapper.appendChild(ul);


}





arrURL = ["https://rickandmortyapi.com/api/character/?page=1", "https://rickandmortyapi.com/api/character/?page=5", "https://rickandmortyapi.com/api/character/?page=4", "https://rickandmortyapi.com/api/character/?page=37"];

createList(arrURL);
let ulList = document.querySelector('.ul-list');



ulList.addEventListener("click", function getText(event) {
    let result = event.target.innerText;

    console.log(result);
    button.addEventListener("click", chechBackEnd(result)

    )

})

wrapper.addEventListener("mouseover", () => {
    ulList.style.display = "block";

});
wrapper.addEventListener("mouseout", () => {
    ulList.style.display = "none";

});