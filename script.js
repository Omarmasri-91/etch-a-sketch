let container=document.querySelector("#container");
let side=16;

createGrid(side);

function createGrid(side){ 
    container.style.cssText=`grid-template-columns: repeat(${side}, 1fr); grid-template-rows: repeat(${side}, 1fr);`;
    for (i=1; i<=(side*side); i++) {
    let square=document.createElement("div");
    square.classList.add("squareoff");
    square.setAttribute("id", i);
    container.appendChild(square);
    }
    hoverColor();
}

function clearFun() {
    let squareon=container.querySelectorAll("div");
    squareon.forEach((div) =>{
    //div.classList.remove("squareon");
    console.clear();
    container.removeChild(div);
    });
    let sideinit=prompt("Enter number of squares in each row or coloumn");
    side=Math.round(sideinit);
    createGrid(side);
    return squareon;
};

function hoverColor(){
    let squareon=container.querySelectorAll("div");
    squareon.forEach((div) =>{
        div.addEventListener("mouseover", (e)=>{
        console.log(e.target.id);
        div.classList.add("squareon");
        });
    });
}
let clearbtn=document.querySelector("#clearbtn");
clearbtn.addEventListener("click", clearFun);



