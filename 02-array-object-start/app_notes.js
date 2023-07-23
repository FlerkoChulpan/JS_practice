const inputElement=document.getElementById('title');
const createBtn=document.getElementById('create');
const listElement=document.getElementById('list');
const notes = [
    {
        title: 'Название заметки',
        completed: false, //выполнено ли задание 
    },
    {
        title: 'Название заметки 2',
        completed: true, //выполнено ли задание 
    }
]
// console.log(inputElement.value);

// const notes=['notes1', 'notes2'];

function getNoteTemplate (note) {
    console.log(note.completed)
    return `
    <li
                class="list-group-item d-flex justify-content-between align-items-center"
                >
                <span class="${note.completed ? 'text-decoration-line-through' :''}">${note.title}</span>
                <span>
                    <span class="btn btn-small btn-success">&check;</span>
                    <span class="btn btn-small btn-danger">&times;</span>
                </span>
            </li>
    `
}

function render () {
    // for (let i=0; i < notes.length; i++) {
    //     listElement.insertAdjacentHTML(
    //         'beforeend', 
    //         getNoteTemplate(notes[i])
    //     )
    // }

    for (let note of notes) {
        listElement.insertAdjacentHTML(
            'beforeend', 
            getNoteTemplate(note)
        )
    }
}

render

createBtn.onclick = function () {
    if(inputElement.value.length ===0) {
        return
    }
    const newNote={
        title: inputElement.value,
        completed: false,
    }

    listElement.insertAdjacentHTML(
        'beforeend', 
        getNoteTemplate(newNote)
    )
    inputElement.value=''
}

