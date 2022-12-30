const noteInputTitle = document.getElementById("cornell-title")
const noteInputTopic = document.getElementById("cornell-topic")
const noteInputDate = document.getElementById("cornell-date")
const noteInputTerms = document.getElementById("cornell-terms")
const noteInputIdeas = document.getElementById("cornell-ideas")
const noteInputQuestions = document.getElementById("cornell-questions")
const noteInputNotes = document.getElementById("cornell-notes")
const noteInputResume = document.getElementById("cornell-resume")
const noteInputFileName = document.getElementById("cornell-file-name")

const btnDownload = document.getElementById("download-note")

class Note{
    constructor(title, topic, date, terms, ideas, questions, notes, resume, fileName){
        this.title = title
        this.topic = topic
        this.date = date
        this.terms = terms
        this.ideas = ideas
        this.questions = questions
        this.notes = notes
        this.resume = resume
        this.fileName = fileName
    }
}

function createNote(n){
return `Título: ${n.title}
Tema/Materia: ${n.topic}
Fecha: ${n.date}

Notas:
    ${n.notes}

Glosario:
    ${n.terms}
Ideas principales:
    ${n.ideas}
Preguntas:
    ${n.questions}

Resumen:
    ${n.resume}`
}
function createFileName(n){
    if (n.fileName){
        return `${n.fileName}.txt`
    } else {
        return `note${n.date ? `-${n.date}` : ``}${n.title ? `-${n.title}` : ``}.txt`
    }
}
function saveNote(content, name) {
    const a = document.createElement("a")
    const file = new Blob([content], {type: 'text/plain'})
    const url = URL.createObjectURL(file)
    a.href = url
    a.download = name
    a.click()
    URL.revokeObjectURL(url)
}

btnDownload.addEventListener("click", () => {
    actualNote = new Note(
        noteInputTitle.value,
        noteInputTopic.value,
        noteInputDate.value,
        noteInputTerms.value,
        noteInputIdeas.value,
        noteInputQuestions.value,
        noteInputNotes.value,
        noteInputResume.value,
        noteInputFileName.value
    )
    saveNote(createNote(actualNote), createFileName(actualNote))
}
)