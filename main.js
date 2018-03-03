//регулярные_task_1
function checkLetter(str) {
	var reg = /^\d/;
	if (str.search(reg) == 0) {
		document.write('строка начинается с цифры: ' + str[0] + '<br>');
	} else {
		document.write('строка начинается не с цифры' + '<br>');
	}
}
var forTesting = "8 пингвинов и 9 карасей."
checkLetter(forTesting);


//регулярные_task_2
function findCardNumber(str) {
	var reg = /[0-3]{4}[0-9-]{15}/g;
	var result = str.match(reg);
	document.write(result + '<br>');
}
var text = "Иван вчера потерял свою кредитку, ее номер 1178-9087-2384-8787. Поэтому он пошел в банк и описал ситуацию. Там пошли ему навстречу и выдали новую кредитку под номером:  1103-8899-0811-1722."
findCardNumber(text);


//регулярные_task_3
function replaceSep(text, seperator) {
	document.write(text.replace(/\//g, seperator ) + + '<br>');
}
var tel = "8/927/31/10/765";
var sign = "-";
replaceSep(tel, sign);

/*=======================================================================*/
/*=======================================================================*/


//строки_task_1
function culcLength (str) {
	return str.length;
}
var word = prompt('Введите слово:','');
culcLength (word);
alert('Вы ввели ' + culcLength (word) + ' символа.')


//строки_task_2
function findWordLength(str) {
	if (str.length > 10) {
		alert('Ваше слово состоит больше чем с 10 символов');
	} if (str.length == 10) {
		alert('Ваше слово состоит больше из 10 символов');
	} else {
		alert('Ваше слово состоит меньше чем с 10 символов');
	}
}
var userWord = prompt('Введите любое слово:');
findWordLength(userWord);


//строки_task_3
var answer = "пифагор";
var userAnswer = prompt('Его штаны во все стороны равны:', '');
if  (answer == userAnswer.toLowerCase()) {
	alert ('Вы дали правильный ответ');
} else {
	alert('Вы дали неправильный ответ');
}


//строки_task_4
var mySite = "http://crispwp.com/";
function findStr(str) {
	if (str.indexOf('http://') !== -1) {
		alert('В названии сайта присутствует указание протокола "http://"');
	} else {
		alert('В названии сайта не присутствует указание протокола "http://"');
	}
} 
findStr(mySite);


//строки_task_5
myStr = "Хороший день."
function makeVariable(str) {
	var day = str.slice(8,12);
	alert(day);
}
makeVariable(myStr);


//строки_task_6
var students = ["Илья","Greg", "Алина"];
for (var i = 0; i < students.length; i++) {
	var noRussian = [];
	for (var j=0; j < students[i].length; j++) {
		if (students[i].charCodeAt(j) < 1040 || (students[i].charCodeAt(j) > 1103) ) {
			noRussian.push(students[i][j])
		}
	}
	if (noRussian.length > 0) {
		document.write("В слове " + students[i] + " имеются такие не русские буквы:" + noRussian + '<br>');
	}
}


//строки_task_7
function truncate(str, maxlength) {
	if (str.length > maxlength) {
		return str.slice(0, maxlength - 3) + '...';
	}
}
truncate("hello wotld", 8); 


//строки_task_8
function makeCamelCase(str) {
	var newStr = str.split('-');
	for (var i = 0; i < newStr.length; i++) {
		newStr[i] = newStr[i].charAt(0).toUpperCase() + newStr[i].slice(1);
	}
	return newStr.join('');
}
	

/*=======================================================================*/
/*=======================================================================*/

//циклы_task_1
for(var i=1; i<=7; i++) {
	document.write('Квадрат ' + i + ' равно = ' + i*i + '<br>');
}

//циклы_task_2
var i = 0;
while (i < 3) {
	alert( "номер " + i + "!" );
	i++;
}

//циклы_task_3
var students2 = ['Абаканов Сергей', 'Алалина Алина', 'Гагарин Матвей', 'Хантухова Лейла', 'Викторов Сергей',  'Масалкин Андрей', 'Петравкин Алексей', 'Московин Павел', 'Данилов Станислав'];
var i = 0;
while (i < 7) {
	alert( students2[i]);
	i++;
}

//циклы_task_4
var more100;
do {
	more100 = prompt('Введите число Больше 100', '');
} while (more100 <= 100 && more100 != null);


/*=======================================================================*/
/*=======================================================================*/


//числа_task_1
var randSimbol = ["Молоко", 77, 11, "Мед", -88];
function findType(arr) {
	for (var i=0; i < arr.length; i++) {
		if ( typeof(arr[i]) == 'number') {
			document.write(arr[i] + ' - число' +'<br>');
		} else {
			document.write(arr[i] + ' - не число' +'<br>');
		}
	}
}
findType(randSimbol);

//числа_task_2
var myArray = ["100 попугаев", "201 рубль", "624 доллара", "109 кроликов", "33 весельчака", "62 кабана"];
function makeNumArr(arr) {
	for (var i =0; i < arr.length; i++) {
		arr[i] = parseInt(arr[i]); 
	}
	document.write('Числовой массив: ' + arr + '<br>');
} 
makeNumArr(myArray);

//числа_task_3
var first = +prompt('Введите 1-e число', '');
var second = +prompt('Введите 2-е число', '');
function findSumm(a,b) { 
	var summ = a + b
	alert('Cумма 2-х чисел составляет: ' + summ);
}
findSumm(first, second);

//числа_task_4
var randSimbol = [10.5, 15, 112, 77.6];
function roundingOff(arr){
	for (var i = 0; i < arr.length; i++) {
		arr[i] = arr[i].toFixed(2);
	}
	document.write('Числовой массив c округлением до 2-х знаков: ' + arr + '<br>');
}
roundingOff(randSimbol);


//числа_task_5
var numberArray = [34.82, 12.90, 17.01, 78.51];
var method = prompt("Введите метод округления:  'round', 'ceil' или 'floor'", 'round')
function roundArr (arr, method) {
	for (var i= 0; i < arr.length; i++) {
		if (method == 'round') {
			arr[i] = Math.round(arr[i]);
		} else if (method == 'ceil') {
			arr[i] = Math.ceil(arr[i]);
		} else if(method == 'floor') {
			arr[i] = Math.floor(arr[i]);
		} else {alert('такого метода нету'); }
	}
	document.write('Числовой массив c округлением по методу ' + method +': ' +arr +'<br>');
}
roundArr(numberArray, method);

//числа_task_6
function createRandomArr (num, min, max) {
	for (var i = 0; i < num.length; i++){
		var rand = min + Math.random() * (max - min + 1)
		num[i] = Math.floor(rand);
	}
	document.write('Массив с рандомными 10 числами: ' + num + '<br>');
}
var randomArray = new Array(10);
createRandomArr (randomArray, 1, 20);


/*=======================================================================*/
/*=======================================================================*/

//switch_task_1
var browser;
if(browser == 'IE') {
	alert('О, да у вас IE!');
} else if (browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari'
 || browser == 'Opera') {
	alert('Да, и эти браузеры мы поддерживаем');
} else {
	alert('Мы надеемся, что и в вашем браузере все ок!');
}

//switch_task_2
var a = +prompt('a?', '');

switch(a) {
	case 0 :
		alert( 0 );
		break;
	case 1 :
		alert( 1 );
		break;
	case 2 :
	case 3 :
		alert( '2,3' );
		break;
}

