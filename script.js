let container=document.querySelector("#container");
   

for (i=1; i<=256; i++) {
    let square=document.createElement("div");
    square.classList.add("squareoff");
    square.setAttribute("id", i);
    container.appendChild(square);
}

let squareon=container.querySelectorAll("div");
squareon.forEach((div) =>{
    div.addEventListener("mouseenter", (e)=>{
        console.log(e.target.id);
        div.classList.add("squareon");
    });
});

