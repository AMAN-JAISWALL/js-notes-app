console.log("our notes app");
let inputBox = document.querySelectorAll('.inputBox'); // for p tag and here i am using querySelectorAll becouse querySelector is used to select a single element from the DOM tree, while document. querySelectorAll is used to select multiple elements from the DOM tree.
let deleteElem = document.querySelector('.deleteElem'); // for delete img
let createNoteElem = document.querySelector("#createNoteElem"); // btn create
let notesContainerDiv = document.querySelector(".notes-container"); // for p container


function getDataFromLocal(){
    notesContainerDiv.innerHTML=localStorage.getItem("notesData");
 }
 
 getDataFromLocal();


createNoteElem.addEventListener("click",()=>{
    // console.log("create note");
    let p = document.createElement("p");
    p.classList.add("inputBox");
    p.setAttribute("contenteditable","true");
    let img = document.createElement('img');
    img.setAttribute("src","images/delete.png");
    img.classList.add("deleteElem");
    notesContainerDiv.appendChild(p).appendChild(img);
    console.log(notesContainerDiv.appendChild(p).appendChild(img));
   
})


notesContainerDiv.addEventListener("click",(e)=>{
    console.log("delete elem",e.target);
    let imgElem= e.target;
    if(imgElem.tagName == "IMG"){
        imgElem.parentElement.remove();
        // let pData = imgElem.parentElement.remove();
        // localStorage.removeItem('notesData',pData);
        setDataAtLocal();
    }else if(e.target.tagName === "P"){
        let notesPara = document.querySelectorAll(".inputBox");
        notesPara.forEach((para)=>{
            para.onkeyup = function(){
                setDataAtLocal();           
            }
        })
    }
})

function setDataAtLocal(){
    localStorage.setItem('notesData',notesContainerDiv.innerHTML);
}
