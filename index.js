const inputbox=document.getElementById("input-box");
const listContainer= document.getElementById("list-container");


function addtask(){
    if(inputbox.value === ''){
        alert("write a task first please");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value= "";
    save();
}

listContainer.addEventListener("click" , function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        save();
    }
    else if( e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        save();
    }
}, false);


// to save content on close

function save(){
    localStorage.setItem("data", listContainer.innerHTML);
}

// display when open again
function show(){
    listContainer.innerHTML = localStorage.getItem("data");
}
show();







// var icon= document.getElementById("ummm");
// icon.onclick = function(){
//     document.body.classList.toggle("dark");
// }