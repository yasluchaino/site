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


document.getElementById("signup-action").addEventListener("click", function() {
    // Получаем значения полей из формы
    var theme = document.getElementById("theme").value;
    var name = document.getElementById("name").value;
    var other = document.getElementById("other").value;
    
   // Проверяем, что все поля заполнены
   if (theme && name ) {
    // Формируем текстовое сообщение с информацией из формы
    var message = "Тема: " + theme + "\nИмя: " + name + "\nДополнительная информация: " + other;

    // URL для чата в WhatsApp с предзаполненным текстом сообщения
    var whatsappLink = "https://wa.me/89614608132?text=" + encodeURIComponent(message);

    // Открываем ссылку в новой вкладке
    window.open(whatsappLink);
} else {
    // Выводим сообщение об ошибке или предупреждение, если не все поля заполнены
    alert("Пожалуйста, заполните все поля формы.");
}
});