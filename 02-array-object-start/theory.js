theory

const array = [1, 2, 3, 4, 15, 26];
console.log(array.length); //показывает кол-во элементов (длина массива)
array[0]=`hello`;
console.log(array) //0 элемент заменился на hello
array[array.length]='becon' //добавляется 1 элемент в конец

const arrayString=[`hi`, `hello`, `bonjour`];
console.log(arrayString); //показывает кол-во элементов и перечисляет их 

const arrayNew=new Array(1,2,3,4,5);

const arrayNumbers=[6,7,8,9,10];
console.log(arrayNumbers[3]) //показывает только 4! элемент, потому что отсчет идет с 0. Получается 6 - 0 элемент, 7 - 1 элемент и т.д.

console.log(arrayNumbers(array.length-1)) //покажется самый последний элемент. array.length выведет общее количество элементов => покажет самый последний элемент. -1 делаем, так как отсчет идет с 0


