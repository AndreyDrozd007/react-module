import { useEffect, useState } from "react";
import notesData from "../notesData";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "../styles/styled";
import ActiveNoteDisplay from "./ActiveNoteDisplay";

const Note = (props) => {
  const classes = useStyles(props);
  const [activeItem, setActiveItem] = useState(null);

  const PostNote = notesData.map((post) => {
    return (
      <ItemsNote
        post={post}
        setActiveItem={setActiveItem}
        activeItem={activeItem}
      />
    );
  });

  return (
    <div className={classes.root}>
      {!activeItem && <ActiveNoteDisplay />}
      {PostNote}
    </div>
  );
};

const ItemsNote = ({
  post: { id, title, description, date },
  activeItem,
  setActiveItem,
}) => {
  const classes = useStyles();
  const [color, setColor] = useState(classes.noteColor);
  const [display, setDisplay] = useState([]);

  useEffect(() => {
    if (activeItem !== id) {
      setColor(classes.noteColor);
      setDisplay(notesData);
    }
  }, [activeItem, id]);

  const handleColor = () => {
    setColor(classes.activeColor);
    setActiveItem(id);
  };

  const handleToggleClick = (id) => {
    setDisplay((display) =>
      display.includes(id)
        ? display.filter((entry) => entry !== id)
        : [...display, id]
    );
  };

  return (
    <Card
      className={classes.root}
      key={id}
      onClick={() => handleColor(classes.activeColor)}
      elevation={3}
    >
      <CardContent
        className="notes-wrapper"
        onClick={() => handleToggleClick(notesData.id)}
      >
        <CardContent className={color}>
          <Typography variant="h5">{title}</Typography>
          <Typography variant="subtitle2">
            {description.substring(0, 20)}...
          </Typography>
          <div>{date}</div>
        </CardContent>
      </CardContent>

      <CardContent>
        {display.includes(notesData.id) && (
          <CardContent className="display-wrapper" key={notesData.id}>
            <Typography variant="h5">{title}</Typography>
            <Typography variant="body2">{description}</Typography>
            <div>{date}</div>
          </CardContent>
        )}
      </CardContent>
    </Card>
  );
};
export default Note;
