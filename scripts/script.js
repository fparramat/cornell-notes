const noteInputTitle = document.getElementById("cornell-title")
const noteInputTopic = document.getElementById("cornell-topic")
const noteInputDate = document.getElementById("cornell-date")
const noteInputTerms = document.getElementById("cornell-terms")
const noteInputIdeas = document.getElementById("cornell-ideas")
const noteInputQuestions = document.getElementById("cornell-questions")
const noteInputNotes = document.getElementById("cornell-notes")
const noteInputResume = document.getElementById("cornell-resume")
const noteInputFileName = document.getElementById("cornell-file-name")

const btnDownloadTxt = document.getElementById("download-note-txt")
const btnDownloadMd = document.getElementById("download-note-md")

//Dark Mode
const btnDarkMode = document.getElementById("dark-mode-btn")
btnDarkMode.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark-mode");
    document.documentElement.classList.toggle("light-mode");
});
const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
if (darkModeMediaQuery.matches) {
    // El modo oscuro está activado en el dispositivo del usuario
    document.documentElement.classList.toggle("dark-mode");
} else {
    // El modo oscuro no está activado en el dispositivo del usuario
    document.documentElement.classList.toggle("light-mode");
}
darkModeMediaQuery.addEventListener('change', (event) => {
    if (event.matches) {
        // El usuario ha activado el modo oscuro en su dispositivo
        document.documentElement.classList.toggle("dark-mode");
    document.documentElement.classList.toggle("light-mode");
    } else {
        // El usuario ha desactivado el modo oscuro en su dispositivo
        document.documentElement.classList.toggle("light-mode");
        document.documentElement.classList.toggle("dark-mode");
    }
});
//Fin Dark Mode

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
    createNoteTxt() {
        return `Título: ${this.title}
Tema/Materia: ${this.topic}
Fecha: ${this.date}

Notas:
${this.notes}

Glosario:
${this.terms}
Ideas principales:
${this.ideas}
Preguntas:
${this.questions}

Resumen:
${this.resume}`
    }
    createNoteMd() {
        return `# ${this.title}

## *Tema:* ${this.topic}

## *Fecha:* ${this.date}

***
## Notas:
${this.notes}

***
## Glosario:
${this.terms}

## Ideas principales:
${this.ideas}

## Preguntas:
${this.questions}

***
## Resumen:
${this.resume}`
    }
    createFileName(extesion){
        if (this.fileName){
            return `${this.fileName}.${extesion}`
        } else {
            return `note${this.date ? `-${this.date}` : ``}${this.title ? `-${this.title}` : ``}.${extesion}`
        }
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
function stageNote(){
    return new Note(
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
}
btnDownloadTxt.addEventListener("click", () => {
    let stagedNote = stageNote()
    saveNote(stagedNote.createNoteTxt(), stagedNote.createFileName("txt"))
})
btnDownloadMd.addEventListener("click", () => {
    let stagedNote = stageNote()
    saveNote(stagedNote.createNoteMd(), stagedNote.createFileName("md"))
})