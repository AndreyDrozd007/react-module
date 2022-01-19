import React, { useState,  useEffect} from "react";

import ActiveNote from "components/ActiveNote";
import Note from "components/Note/Note";

import DATA_NOTES_LIST from "notesData";

const NoteContainer = () => {
  const [activeNote, setActiveNote] = useState(null);
  const [edit, setEdit] = useState('');
  const [valueTitle, setValueTitle] = useState(''); 
  const [valueDescription, setValueDescription] = useState('');
  const [dataNotes, setDataNotes] = useState(DATA_NOTES_LIST);

  useEffect(() => {
    const key = localStorage.getItem('data')
      if(key) {
        setDataNotes(JSON.parse(key))
      }
  }, [])
  
  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(dataNotes))
  })

  return (
    <>
      {!activeNote && <ActiveNote />}
      {dataNotes.map((note) => (
          <Note
          key={note.id}
          note={note}
          activeNote={activeNote}
          setActiveNote={setActiveNote}
          edit={edit}
          setEdit={setEdit}
          valueTitle={valueTitle}
          setValueTitle={setValueTitle}
          valueDescription={valueDescription}
          setValueDescription={setValueDescription}
          dataNotes={dataNotes}
          setDataNotes={setDataNotes}
        />
      ))}
    </>
  );
};

export default NoteContainer;
