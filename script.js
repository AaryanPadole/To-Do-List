const listcontainer=document.getElementById("list-container");
const input=document.getElementById("input-box");
const addButton = document.querySelector("button");
addButton.addEventListener("click", addTask);
// Add event listener for pressing the Enter key
input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});

function addTask(){
    if(input.value===''){
        alert("You must write something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=input.value;
        listcontainer.appendChild(li);  // to add the list and display it add in the container by append
        let span= document.createElement("span");
        span.innerHTML = "\u00d7";  // this will add cross(x) sign in the span tag
        li.appendChild(span); // add cross symbol after every list added


    }
    input.value="";  // to clear the text in the input field after adding
    savedata();
}
listcontainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI")
    {
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName==="SPAN")
    {
        e.target.parentElement.remove();   // remove complete task from the list when click on x button
        savedata();
    }
},false);

function savedata(){
    localStorage.setItem("data",listcontainer.innerHTML);
}
function showTask(){
    listcontainer.innerHTML=localStorage.getItem("data");
}
showTask();