//1.Переписать из if в тернарный оператор «?»

let age = 14;

age < 14 ? alert('Привет малыш') : age < 16 ?  alert('Привет парень') : alert('Здрвствнйте');

// 2.Измените эту программу так, чтобы выводилось окно с
// вопросом «Сколько вам лет?». Пользователь должен ввести
// свой возраст, после чего получить сообщение с
// соответствующим приветствием. 

let userAge = +prompt('Сколько вам лет?');
userAge < 14 ? alert('Привет малыш') : userAge < 16 ?  alert('Привет парень') : alert('Здрвствнйте');

// 3.Измените программу так, чтобы когда пользователь нажимал
// кнопку «отмена» либо крестик, выводилось сообщение «вы не
// ввели свой возраст».


let ageOfUser = +prompt('Сколько вам лет?');

if(ageOfUser === null || ageOfUser === ''){
    alert('вы не ввели свой возраст');
} else {
    ageOfUser < 14 ? alert('Привет малыш') : ageOfUser < 16 ?  alert('Привет парень') : alert('Здрвствнйте');
}





