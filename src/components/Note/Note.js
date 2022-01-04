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
  data,
  setData,
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

  const handlerData = (id, title, description) => {
    const newData = JSON.parse(JSON.stringify(data));
    const node = newData.find(note => note.id === id);
    node.title = title;
    node.description = description; 
    setData(newData);
  } 

  const saveChangesNote = (id, valueTitle, valueDescription) => {
    handlerData(id, valueTitle, valueDescription);
    setEdit(null);
  }

  return (
    <>
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
      data={data}
      setData={setData}
      handlerData={handlerData}
      />
    </>
  );
};

export default Note;
