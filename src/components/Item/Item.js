import ItemLayout from "./ItemLayout";

const Item = ({ note, activeNote, setActiveNote }) => {
  
  const handleClick = (id) => {
    const newId = activeNote === id ? null : id;
    setActiveNote(newId);
  };

  return (
    <ItemLayout handleClick={handleClick} note={note} activeNote={activeNote} />
  );
};

export default Item;
