import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import PropTypes from 'prop-types';

import DATA_NOTES_LIST from "../notesData";
import {CardActiveColor, CardWrapper} from '../styled';

const CardNote = ({
  note: { id, title, description, date },
  activeNote,
  setActiveNote,
  props
}) => {
  const [color, setColor] = useState(null);
  const [display, setDisplay] = useState([]);
  props={color}

  useEffect(() => {
    if (activeNote !== id) {
      setColor(null);
      setDisplay(DATA_NOTES_LIST);
    }
  }, [activeNote, id]);

  const handleColor = () => {
    const newColor = color === props ? null : props;
    console.log(newColor);
    const newId = activeNote === id ? null : id;
    setColor(newColor);
    setActiveNote(newId);
  };

  const handleToggleClick = (id) => {
    setDisplay((display) => [...display, id]
    );
  };

  return (
    <CardWrapper>
      <Card key={id} elevation={10} onClick={() => handleColor()}>
        <CardActiveColor props={color}>
          <CardContent onClick={() => handleToggleClick(DATA_NOTES_LIST.id)}>
              <Typography variant="h5">{title}</Typography>
              <Typography variant="subtitle2">
                {description.substring(0, 20)}...
              </Typography>
              <div>{date}</div>
          </CardContent>
        </CardActiveColor>
      </Card>

      <CardContent>
          {display.includes(DATA_NOTES_LIST.id) && (
            <CardContent key={DATA_NOTES_LIST.id}>
              <Typography variant="h5">{title}</Typography>
              <Typography variant="body2">{description}</Typography>
              <div>{date}</div>
            </CardContent>
          )}
        </CardContent>
    </CardWrapper>
  );
};

export default CardNote;

CardNote.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }),
  handleColor: PropTypes.func.isRequired,
  handleToggleClick: PropTypes.func.isRequired,
};

CardNote.defaultProps = {
  handleColor() {},
  handleToggleClick() {},
};