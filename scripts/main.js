document.getElementById("main-action-button").onclick = function(){
    document.getElementById("services").scrollIntoView({behavior: "smooth"});
}
const links = document.querySelectorAll(".menu-item > a");
for (let index = 0; index < links.length; index++) {
  links[index].onclick = function(){
        document.getElementById(links[index].getAttribute("data-link")).scrollIntoView({behavior: "smooth"});
    }
}
const buttons = document.querySelectorAll(".services-items .button");
for (let index = 0; index < buttons.length; index++) {
    buttons[index].onclick = function(){
        document.getElementById("signup").scrollIntoView({behavior: "smooth"});
    }
}


const product = document.getElementById("theme");
const name = document.getElementById("name");
const phone = document.getElementById("phone");
document.getElementById("signup-action").onclick = function(){
    let hasError = false;
    [product,name,phone].forEach(element => {
        if (!element.value){
            element.style.borderColor ="red";
            hasError = true;
        } else{
            element.style.borderColor = "";
        }
    });

    if (!hasError){
        [product,name,phone].forEach(element => {
            element.value = "";
    });
    alert("Спасибо за обращение! Я скоро свяжусь с вами!");
    }
}