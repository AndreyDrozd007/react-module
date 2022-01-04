import React from "react";
import ItemLayout from "./ItemLayout";

const Item = ({ 
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
    const newActiveId = activeNote === id ? null : id;
    setActiveNote(newActiveId);
  };

  const editNote = (id, title, description) => {
    const newEditId = edit === id ? null : id;
    setEdit(newEditId);
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
      <ItemLayout 
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

export default Item;
