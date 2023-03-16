const gridContainer = document.getElementsByClassName("grid-container")[0];
function changeColor(x) {
    x.style.setProperty("background-color","black")
  }
function addgrid(number){
    removeAllChildNodes(gridContainer)
    if(number > 60){
        number = 60
    };
    for (let i = 0; i < number*number; i++) {
        var item = document.createElement("div");
        gridContainer.style.setProperty('grid-template-columns', `repeat(${number}, calc(600px / ${number})`);
        gridContainer.style.setProperty('grid-template-rows', `repeat(${number}, calc(600px / ${number})`);
        item.classList.add('grid-item');
        item.style.setProperty('border', "0.5px solid red");
        item.onmouseover = function(){changeColor(this)};
        gridContainer.appendChild(item);
    };
};

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};
const button = document.querySelector("button")
button.onclick = function() { let number = prompt('Put number'); addgrid(number) };

addgrid(16)