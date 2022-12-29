const noteTitle = document.getElementById("cornell-title")
const noteTopic = document.getElementById("cornell-topic")
const noteDate = document.getElementById("cornell-date")
const noteTerms = document.getElementById("cornell-terms")
const noteIdeas = document.getElementById("cornell-ideas")
const noteQuestions = document.getElementById("cornell-questions")
const noteNotes = document.getElementById("cornell-notes")
const noteResume = document.getElementById("cornell-resume")

const btnDownload = document.getElementById("download-note")

function saveNote(content, name) {
    const a = document.createElement("a")
    const file = new Blob([content], {type: 'text/plain'})
    const url = URL.createObjectURL(file)
    a.href = url
    a.download = name
    a.click()
    URL.revokeObjectURL(url)
}

function createNote(){
    let noteElements =
`Título: ${noteTitle.value}
Tema/Materia: ${noteTopic.value}
Fecha: ${noteDate.value}

Notas:
${noteNotes.value}

Glosario:
${noteTerms.value}
Ideas principales:
${noteIdeas.value}
Preguntas:
${noteQuestions.value}

Resumen:
${noteResume.value}`
saveNote(noteElements, `note${noteDate.value ? `-${noteDate.value}` : ``}${noteTitle.value ? `-${noteTitle.value}` : ``}.txt`)
}

btnDownload.addEventListener("click", createNote)