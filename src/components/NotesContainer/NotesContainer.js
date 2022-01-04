import React, { useState } from "react";

import ActiveNote from "../ActiveNote";
import Note from "../Note/Note";

import DATA_NOTES_LIST from "../../notesData";

const NotesContainer = () => {
  const [activeNote, setActiveNote] = useState(null);

  return (
    <>
      {!activeNote && <ActiveNote />}
      {DATA_NOTES_LIST.map((note) => (
        <Note
          key={note.id}
          note={note}
          activeNote={activeNote}
          setActiveNote={setActiveNote}
        />
      ))}
    </>
  );
};

export default NotesContainer;
