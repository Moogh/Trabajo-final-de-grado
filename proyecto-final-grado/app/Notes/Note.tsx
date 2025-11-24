type NoteItems = {
    title: string;
    message: string;
}

function Note({title, message}: NoteItems) {
    
    return(
        <div className="note">
            <h2>{title}</h2>
            <p>{message}</p>
        </div>
    )
}

export default Note;