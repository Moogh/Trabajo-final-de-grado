import Note from "./Note";

const list = [
    {title: "Hola", message: "Mundo", id: "123"},
    {title: "Hola", message: "Mundo2", id: "1233"}
]
function Noteslist() {
    return(
        <div>
            {
               list.map(note => <Note key={note.id} title={note.title} message={note.message}/>) 
            }
        </div>
    )
}

export default Noteslist;