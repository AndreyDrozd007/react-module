import React, { useState,  useEffect} from "react";
import ActiveNote from "../ActiveNote";
import Item from "../Item/Item";

import DATA_NOTES_LIST from "../../notesData";

const ItemsContainer = () => {
  const [activeNote, setActiveNote] = useState(null);
  const [edit, setEdit] = useState('');
  const [valueTitle, setValueTitle] = useState(''); 
  const [valueDescription, setValueDescription] = useState('');
  const [data, setData] = useState(DATA_NOTES_LIST);

  useEffect(() => {
    const key = localStorage.getItem('data')
      if(key) {
        setData(JSON.parse(key))
      }
  }, [])
  
  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data))
  })

  return (
    <>
      {!activeNote && <ActiveNote />}
      {data.map((note) => (
          <Item
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
          data={data}
          setData={setData}
        />
      ))}
    </>
  );
};

export default ItemsContainer;
