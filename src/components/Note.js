import { useState } from "react";

import NOTES from "../notesData";
import CardNote from './CardNote'
import ActiveNote from "./ActiveNoteBlock";

const Note = () => {
  const [activeNote, setActiveNote] = useState(null);

  return (
    <div>
      {!activeNote && <ActiveNote />}
      {NOTES.map((note) => (
        <CardNote
          note={note}
          setActiveNote={setActiveNote}
          activeNote={activeNote}
        />
      )
    )
    }
    </div>
  )
};

export default Note;