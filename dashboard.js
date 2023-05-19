let isOpen = false
const openNav=()=> {
  isOpen = !isOpen
  console.log(isOpen);
  if (isOpen) {
    document.getElementById("mySidenav").style.width = "150px";
    document.getElementById("main").style.marginLeft = "150px";
    document.querySelector(".title").style.marginLeft = "120px"
    document.querySelector(".note").style.marginLeft = "120px";
  } else {
    document.getElementById("mySidenav").style.width = "0px";
    document.getElementById("main").style.marginLeft = "0px";
    document.querySelector(".title").style.marginLeft = "0px"
    document.querySelector(".note").style.marginLeft = "0px";
  }
}
const displayNote=()=>{
  wholeContent.innerHTML=""
  filterMsg.innerHTML=""
  currentUserArray.map((item,index) => {

    wholeContent.innerHTML+=`<div class="mt-3 col-lg-3 col-md-6 col-12 rounded-5">
    <div class="col-12 rounded-2" style="min-height: 50vh; background:whitesmoke;">
      <div class="card-header fw-bold bg-danger text-light fs-5">${item.title}</div>
      <div class="card-body">${item.note}</div>
      <div class="float-end">
        <div class="d-flex float-bottom mb-auto d-block me-2" style="margin-top: 31vh;">
        <img src="delete.png" alt="" class="me-5 rounded-2" onclick="deleteBtn(${index})">
        <img src="edit.png" alt="" class="rounded-2" onclick="edit(${index})">
      </div>
      </div>
    </div>`
  })
}
let currentUserArray=[]
const addNote=()=>{
  let noteDetails={
    title:title.value,
    note:note.value
  }
  currentUserArray.push(noteDetails)
  displayNote()
  console.log(currentUserArray);
}
const textArea=()=>{
  document.querySelector(".icons").classList.remove("d-none")
}
const backgroundOption=()=>{

}
let isClick=false
const slider=()=>{
  isClick=!isClick
  if (isClick) {
    body.style.backgroundColor="pink"
  } else {
    body.style.backgroundColor="white"
  }
}

const deleteBtn=(index)=>{
  currentUserArray.splice(index,1)
  displayNote()
  console.log(index);
}
const edit=(index)=>{
  console.log(index);
  function OpenBootstrapPopup() {
    $("#simpleModal").modal('show');
  }
  OpenBootstrapPopup()
  localStorage.setItem("index", index)
  let getStoreIndex = localStorage.getItem("index")
  let findClickIndex=currentUserArray.find((item,index)=> index == getStoreIndex)
  console.log(findClickIndex);
  noteTitle.value=`${findClickIndex.title}`
  noteText.innerText=`${findClickIndex.note}`
}

const update=()=>{
  let getStoreIndex = localStorage.getItem("index")
  let findClickIndex=currentUserArray.find((item,index)=> index == getStoreIndex)
  console.log(findClickIndex);
  updateDetails={
    title:noteTitle.value,
    note:noteText.value
  }
  currentUserArray.splice(getStoreIndex ,1,updateDetails)
  console.log(currentUserArray);
  displayNote()
  console.log(updateDetails);
}

const search=()=>{
  if ( wholeContent.innerHTML=="") {
    filterMsg.innerHTML="No matches found"
  } else {
    let text=search.value 
    currentUserArray.find((item,index)=> {
      wholeContent.innerHTML=`<div class="mt-3 col-lg-3 col-md-6 col-12 rounded-5">
      <div class="col-12 rounded-2" style="min-height: 50vh; background:whitesmoke;">
        <div class="card-header fw-bold bg-danger text-light fs-5">${item.title}</div>
        <div class="card-body">${item.note}</div>
        <div class="float-end">
          <div class="d-flex float-bottom mb-auto d-block me-2" style="margin-top: 31vh;">
          <img src="delete.png" alt="" class="me-5 rounded-2" onclick="deleteBtn(${index})">
          <img src="edit.png" alt="" class="rounded-2" onclick="edit(${index})">
        </div>
        </div>
      </div>`
    })
    
  }
  // for(let s of filterNote){
  //   console.log(s);
  // }

}


 





  