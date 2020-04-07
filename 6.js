//6) Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет 
//перевести: EUR, UAN или AZN, и получает в ответ соответствующую сумму.
let dollar = prompt('Введите сумму в доларах ?');
let currency = prompt( 'В какую валюту хотели-бы перевести : EUR, UAN , AZN?');
if(currency == 'EUR'){
    alert(`${dollar * 0.9} EUR`);
}else if (currency == 'UAN'){
    alert(`${dollar * 26} UAN`);

}else if (currency == 'AZN'){
    alert(`${dollar * 1.7} AZN`);
}else{
    alert(`Не такой валюты`);
}