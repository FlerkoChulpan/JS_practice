/*theory

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
*/

const inputElement=document.getElementById('title');
const createBtn=document.getElementById('create');
const listElement=document.getElementById('list');

// console.log(inputElement.value);

const notes=['notes1', 'notes2']

function render () {
    listElement.insertAdjacentHTML(
        'beforeend', 
        `
            <li
                class="list-group-item d-flex justify-content-between align-items-center"
                >
                <span>${notes[0]}</span>
                <span>
                    <span class="btn btn-small btn-success">&check;</span>
                    <span class="btn btn-small btn-danger">&times;</span>
                </span>
            </li>
        `
    )
    listElement.insertAdjacentHTML(
        'beforeend', 
        `
            <li
                class="list-group-item d-flex justify-content-between align-items-center"
                >
                <span>${notes[1]}</span>
                <span>
                    <span class="btn btn-small btn-success">&check;</span>
                    <span class="btn btn-small btn-danger">&times;</span>
                </span>
            </li>
        `
    )
}

render

createBtn.onclick = function () {
    if(inputElement.value.length ===0) {
        return
    }
    //listElement.innerHTML=

    listElement.insertAdjacentHTML(
        'beforeend', 
        `
            <li
                class="list-group-item d-flex justify-content-between align-items-center"
                >
                <span>${inputElement.value}</span>
                <span>
                    <span class="btn btn-small btn-success">&check;</span>
                    <span class="btn btn-small btn-danger">&times;</span>
                </span>
            </li>
        `
    )
    inputElement.value=''
}