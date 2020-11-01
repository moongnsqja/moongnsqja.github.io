/*
const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");


const TODOS_LS = 'toDos';

const toDos = [];

function saveToDos(params) {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
    /*JSON.stringify는 데이터를 전달할 때, 자바스크립트가 그걸 다룰 수 있게 변형시켜주는 것 
    자바스크립트object -> string or string -> object
    쓴 이유는 자바스크립트는 모든 데이터를 string으로 저장하려고 하는데 
    여기서 저장될 때 object로됨 그래서 string으로 바꾸려고 씀
}

function paintToDo(text) {
    const li = document.createElement("li");    //make entpy li
    const delBtn = document.createElement("button");     //make span button
    const span = document.createElement("span");
    const newId = toDos.length +1;
    delBtn.innerText = "❌";
    span.innerText = text;  //this text comes from submit function
    li.appendChild(span);   // span put in li
    li.appendChild(delBtn); // button inside of the li
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
        
    };
    toDos.push(toDoObj);
    saveToDos();
}//local storage에는 자바스크립트 data를 저장할 수 없고 string만 저장 가능

function handleSubmit(event) {
    event.preventDefalut();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = ""; //값을 입력 한 후에 input창을 비운다 이거 안하면 그대로 남아 잇음
}

function loadToDos(params) {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadToDos !== null){
      const parsedToDos = JSON.parse(loadedToDos);
      parsedToDos.forEach(function(toDo){
        paintToDo(toDo.text);
      }); 
      //array에 담겨있는 것들을 각각에 한번씩 함수를 실행시켜준다
      // toDos==null 일 때 toDoForm은 항상 보이기 때문에 할게 없다
      //그래서 같지 않을 때로 한다
    }
}

    function init(params) {
        loadToDos();
        toDoForm.addEventListener("submit", handleSubmit);
    }

    init();*/
    

   const toDoForm = document.querySelector(".js-toDoForm"),
   toDoInput = toDoForm.querySelector("input"),
   toDoList = document.querySelector(".js-toDoList");
 
 const TODOS_LS = "toDos";
 
 let toDos = [];

 

 function deleteToDo(event) {
   const btn = event.target;
   const li = btn.parentNode;
   toDoList.removeChild(li);
   const cleanToDos = toDos.filter(function (toDo) {
     return toDo.id !== parseInt(li.id);//li.id가 string이어서 parseInt를 이용하여 숫자로 바꾸어줌
   });
   toDos = cleanToDos;
   saveToDos();
 }
 
 
 function saveToDos() {
   localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
 }
 
 function paintToDo(text) {
   const li = document.createElement("li");
   const span = document.createElement("span");
   const delBtn = document.createElement("button");
   const newId = toDos.length + 1;
   span.innerText = text;
   delBtn.innerText = "❌";
   delBtn.addEventListener("click",deleteToDo);
   li.appendChild(span);
   li.appendChild(delBtn);
   li.id = newId; //삭제를 위한 id설정  
   toDoList.appendChild(li);
   const toDoObj = {
     text: text,
     id: newId 
   };
   toDos.push(toDoObj); //element 하나를 넣음
   saveToDos();
 }
 
 function handleSubmit(event) {
   event.preventDefault();
   const currentValue = toDoInput.value;
   paintToDo(currentValue);
   toDoInput.value = "";
 }
 
 function loadToDos() {
   const loadedToDos = localStorage.getItem(TODOS_LS);
   if (loadedToDos !== null) {
     const parsedToDos = JSON.parse(loadedToDos);
     parsedToDos.forEach(function(toDo) {
       paintToDo(toDo.text);
     });
   }
 }
 
 function init() {
   loadToDos();
   toDoForm.addEventListener("submit", handleSubmit);
 }
 init();
