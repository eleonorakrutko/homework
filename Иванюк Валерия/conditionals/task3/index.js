//Переписать из if в тернарный оператор «?»
//2. Измените эту программу так, чтобы выводилось окно с 
//вопросом «Сколько вам лет?». Пользователь должен ввести 
//свой возраст, после чего получить сообщение с
//соответствующим приветствием. 
//3. Измените программу так, чтобы когда пользователь нажимал 
//кнопку «отмена» либо крестик, выводилось сообщение «вы не 
//ввели свой возраст»

let ageHuman = +prompt ('Сколько вам лет?');

if ( ageHuman === null ) {
alert ('Введите свой взраст пожалуйста')
} else if ( number (age < 1 )) {
 alert ('Вы слишком малы')
} else if ( number (age < 6 ) ){
alert ('Привет, малыш');
} else if ( numder (age < 16 ) ) {
alert ('Привет, парень');
} else {
alert ('Здравствуйте')
}


