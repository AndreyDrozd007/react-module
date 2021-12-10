import { useState } from "react";

import NOTES from "../notesData";
import CardNote from './CardNote'
import ActiveNote from "./ActiveNoteBlock";

export default function Note() {
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