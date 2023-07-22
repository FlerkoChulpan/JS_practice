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