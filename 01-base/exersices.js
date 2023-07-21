// Задание #1

// Необходимо создать 3 переменных: var a, let b, const c и присвоить им значения 5 , 10, 13 соответственно.
// Выведите все три переменные с помощью console.log().
// После вывода присвойте переменным a, b и с новые значения, затем выведите их в консоль и посмотрите, что получилось. В случае возникновения ошибок удалить “проблемное” выражение.

var a=5;
let b=10;
const c=13;

console.log (a, b, c)

a=6;
b=12;
c=100; //ошибка, потому что с константа

// Задание #2

// Последовательно запустите следующие фрагменты кода и посмотрите, что получилось:
// Определите для себя, почему в этих 3-х случаях произошел тот или иной результат выполнения.

const a=100;
a=20;
console.log(a); //ошибка, потому что это константа

console.log(a);//ошибка, потому что переменную еще не назначили
let a=15;
console.log(a); 

console.log(a); //underfined - переменная еще не назначена
var a;
a=10;
console.log(a); 

// Задание #3

// Необходимо написать программу, в которой нужно определить переменные (указать для них свои значения):

// productName — название товара.
// productPrice — стоимость.
// productQuantity — количество купленного товара.
// resultCost — итоговая стоимость (высчитать динамически, с учетом цены и количества товара).
// Выведите в консоль строку, в которой на месте фигурных скобок будут соответствующие значения переменных:

// “Вы купили {productName} ({productQuantity} шт.) по {productPrice} ₽. Всего было потрачено: {resultCost} ₽”

let productName = 'книга';
let productPrice = 250;
let productQuantity = 3;
const resultCost=productPrice*productQuantity;

console.log(`Вы купили ${productName} (${productQuantity} шт.) по ${productPrice} рублей. Всего было потрачено ${resultCost} рублей.`)
// Задание #4

// Выведите в консоль следующие выражения:

console.log (typeof 'Hello') //string
console.log (typeof 10) //number
console.log (typeof {}) //object
console.log (typeof null) //object
console.log (typeof undefined) //underfined
console.log (typeof true) //boolean
console.log (typeof []) //object
console.log (typeof (() => {})) //function
// Проанализируйте результат выполнения программы и определите для себя, почему произошел тот или иной вывод. 

// Задание #5

// Выведите в консоль следующие выражения:

console.log (10 == 10); //true == проверяет равенство
console.log (10 != 10); //false != проверяет неравенство
console.log (12 == 'Привет'); //false
console.log (10 < 11); //true
console.log (12 > 20); //false
console.log (true && true); //true
console.log (true && false); //false один из операндов фолс && - И, обязательно долдны быть 2 условия
console.log (false && true); //false
console.log (false || true); //true || - или, если один из операндов подходит, значит все ок
console.log (true || false); //true
console.log (true || true); //true
console.log (10 <= 10); //true
console.log (18 <= 20); //true
console.log (50 >= 50); //true
console.log (51 >= 50); //true
console.log ({} === {}); //false происходит сравнение сравнение ссылок на объекты, а не их содержимого
console.log ({} == {}); //false
// Сравнение по ссылке:

const a = {};
const b = a;
console.log(a === b); //true
// Проанализируйте результат выполнения программы и определите для себя, почему произошел тот или иной вывод. 

// Задание #6

// Создайте переменную a и b, присвойте им любые числа. Если a больше b, выведите в консоль true, иначе — false. 

// Примечание. Нельзя использовать if...else и тернарный оператор. 

let a = 15;
let b = 12;
console.log (Boolean (a>b));