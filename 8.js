//8) Запросить у пользователя длину окружности и периметр квадрата. Определить,
//может ли такая окружность поместиться в указанный квадрат.
let length = prompt("Введите длину окружности ");
let perimetr = prompt("Периметр квадрта");
if(length / Math.PI <= perimetr / 4){
    alert("Поместиться")
}else{
    alert ("Не поместиться")
}