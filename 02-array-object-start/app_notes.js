const inputElement=document.getElementById('title');
const createBtn=document.getElementById('create');
const listElement=document.getElementById('list');
const notes = [
    {
        title: 'Название заметки',
        completed: false, //невыполнено задание 
    },
    {
        title: 'Название заметки 2',
        completed: true, //выполнено задание 
    }
]
// console.log(inputElement.value);

// const notes=['notes1', 'notes2'];


function render () {
    listElement.innerHTML='';
    if (notes.length ===0){
        listElement.innerHTML='<p>Нет заметок</p>'
    }
    for (let i=0; i < notes.length; i++) {
        listElement.insertAdjacentHTML(
            'beforeend', 
            getNoteTemplate(notes[i], i)
        )
    }

    // for (let note of notes) {
    //     listElement.insertAdjacentHTML(
    //         'beforeend', 
    //         getNoteTemplate(note)
    //     )
    // }
}

render()

createBtn.onclick = function () {
    if(inputElement.value.length ===0) {
        return
    }
    const newNote={
        title: inputElement.value,
        completed: false,
    }

    // listElement.insertAdjacentHTML(
    //     'beforeend', 
    //     getNoteTemplate(newNote)
    // )
    notes.push(newNote);
    render();

    inputElement.value=''
}

listElement.onclick=function (event) {
    if (event.target.dataset.index) {
        const index = parseInt(event.target.dataset.index);
        const type = event.target.dataset.type;

        if (type === 'toggle'){
            notes[index].completed = !notes[index].completed
            //console.log('toggle', index);
        }
            else if (type === 'remove'){
                notes.splice(index, 1)
                //console.log('remove', index);
            }

        render()
    }
}

function getNoteTemplate (note, index) {
    return `
    <li
        class="list-group-item d-flex justify-content-between align-items-center"
    >
        <span class="${note.completed ? 'text-decoration-line-through' :''}">${note.title}</span>
        <span>
        <span class="btn btn-small btn-${
            note.completed ? 'warning' : 'success'
        }" data-index="${index}" data-type="toggle">&check;</span>
        <span class="btn btn-small btn-danger"  data-type="remove" data-index="${index}" >&times;</span>
        </span>
    </li>
    `
}