//3) Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.
let num = prompt("Введите трехзначное число");
if (num[0] == num[1] || num[0] == num[2] || num[1] == num[2]) {
  alert("Есть одинаковые цифры");
} else 
  alert("Нет одинаковых цифр");