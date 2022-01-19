import React from "react";
import NoteLayout from "./NoteLayout";

const Note = ({ 
  note, 
  activeNote, 
  setActiveNote, 
  edit, 
  setEdit, 
  valueTitle, 
  valueDescription, 
  setValueTitle, 
  setValueDescription,
  dataNotes,
  setDataNotes,
}) => {

  const handleClick = (id) => {
    const handleNote = activeNote === id ? null : id;
    setActiveNote(handleNote);
  };

  const editNote = (id, title, description) => {
    const handleEdit = edit === id ? null : id;
    setEdit(handleEdit);
    setValueTitle(title);
    setValueDescription(description);
  };

  const handlerDataNotes = (id, title, description) => {
    const updatedDataNotes = [...dataNotes];
    const searchNoteId = updatedDataNotes.find(note => note.id === id);
    console.log(searchNoteId);
    searchNoteId.title = title;
    searchNoteId.description = description; 
    setDataNotes(updatedDataNotes);
  } 

  const saveChangesNote = (id, valueTitle, valueDescription) => {
    handlerDataNotes(id, valueTitle, valueDescription);
    setEdit(null);
  }

  return (
      <NoteLayout 
      handleClick={handleClick} 
      note={note} 
      activeNote={activeNote}
      editNote={editNote}
      edit={edit}
      valueTitle={valueTitle}
      setValueTitle={setValueTitle}
      setValueDescription={setValueDescription}
      valueDescription={valueDescription}
      saveChangesNote={saveChangesNote}
      dataNotes={dataNotes}
      setDataNotes={setDataNotes}
      handlerDataNotes={handlerDataNotes}
      />
  );
};

export default Note;
