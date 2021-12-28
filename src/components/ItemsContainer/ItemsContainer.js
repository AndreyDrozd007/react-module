import React, { useState } from "react";
import ActiveNote from "../ActiveNote";
import Item from "../Item/Item";

import DATA_NOTES_LIST from "../../notesData";

const ItemsContainer = () => {
  const [activeNote, setActiveNote] = useState(null);

  return (
    <>
      {!activeNote && <ActiveNote />}
      {DATA_NOTES_LIST.map((note) => (
        <Item
          key={note.id}
          note={note}
          activeNote={activeNote}
          setActiveNote={setActiveNote}
        />
      ))}
    </>
  );
};

export default ItemsContainer;
