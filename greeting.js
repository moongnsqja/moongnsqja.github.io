const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS="currentUser",
    SHOWING_CN = "showing";

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
    event.preventDefault(); //초기화 되는걸 막아주고
    // ??어떤게 초기화되는걸 막는지
    const currentValue = input.value; //username을 받고
    console.log(currentValue);
    paintGreeting(currentValue);//밑에 펑션을 해준다
    saveName(currentValue);
}

function askForName(params) {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {//()안에 있는건 argument 인수
    form.classList.remove(SHOWING_CN);//text를 색칠하려면 form을 숨겨야함
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello😋 ${text}`;
}

function loadName(params) {
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();
    }else{//user가 있을 때
        paintGreeting(currentUser);
    }
}
function init(params) {
    loadName();
}
init();
