import CalculoRecomendacion from "./Notes/CalculoRecomendacion";
import NotesForm from "./Notes/NotesForm";
import Noteslist from "./Notes/NotesList";

export default function Home() {
  return (
    <div>
      <Noteslist/>
      <CalculoRecomendacion/>
    </div>
  );
}
