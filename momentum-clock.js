const clockContainer = document.querySelector(".js-clock"),
 clockTitle = clockContainer.querySelector("h1");


 function getTime(params) {
     const date = new Date(); //Date는 class full stack js에서 확인 가능
     const minutes = date.getMinutes();
     const hours = date.getHours();
     const seconds = date.getSeconds();
     clockTitle.innerText = 
     `${hours <10 ? `0${hours}`:hours}:${minutes < 10 ? `0${minutes}`:minutes}:${seconds < 10 ? `0${seconds}`:seconds}`;
     //ternary operator (삼항연산자 or 미니if
     //?는 질문이고 :는 else
 }
 
function init(params){
 getTime();  
 setInterval(getTime, 1000);
 //setInterval(a,b) a= 함수이고 b는 실행할 시간 간격(시간단위는 밀리세컨)
}
init();
