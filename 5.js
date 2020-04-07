//5) Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.
let usrNum = prompt('Введите пятиразрядное число');
let first = usrNum % 10;
let second = ((usrNum % 100) - first) / 1;
let fourth = ((usrNum % 10000) - (usrNum % 1000)) / 1000;
let fifth = (usrNum - (usrNum % 10000)) / 10000;
if (first != fifth || second != fourth) {
    alert('Число не палендром');
} else {
    alert('Число палиндром')
}