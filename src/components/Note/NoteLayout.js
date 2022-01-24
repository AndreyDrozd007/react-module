import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import PropTypes from "prop-types";

import { CardActiveColor, CardWrapper } from "styled";
import { FORMAT_DIPLAY } from "utils/utils";
import Input from "components/Input/Input";

const NoteLayout = ({
  note: { id, title, description, date },
  handleClick,
  editNote,
  valueTitle,
  setValueTitle,
  valueDescription,
  setValueDescription,
  saveChangesNote,
  isActive,
  isEditing,
}) => {

  return (
    <CardWrapper>
      <Card elevation={10} onClick={() => handleClick(id)}>
        <CardActiveColor active={isActive}>
          <CardContent>
            {isEditing ? (
              <Input 
              inputValue={valueTitle} 
              setValue={setValueTitle}
              />
            ) : (
              <Typography variant="h5">{title}</Typography>
            )}
            <>
              {isEditing ? (
                <div>
                  <Input
                    inputValue={valueDescription}
                    setValue={setValueDescription}
                  />
                  <AddCircleIcon
                    onClick={() =>
                      saveChangesNote(id, valueTitle, valueDescription)
                    }
                  />
                </div>
              ) : (
                <Typography variant="subtitle2">
                  {FORMAT_DIPLAY(description)}..
                </Typography>
              )}
              <div>{date}</div>
            </>
            {isActive && (
              <CardContent>
                <Typography variant="h5">{title}</Typography>
                <Typography variant="body2">{description}</Typography>
                <div>{date}</div>
              </CardContent>
            )}
          </CardContent>
          <button>
            <EditIcon onClick={() => editNote(id, title, description)} />
          </button>
        </CardActiveColor>
      </Card>
    </CardWrapper>
  );
};

export default NoteLayout;

NoteLayout.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }),
  handleColor: PropTypes.func.isRequired,
};

NoteLayout.defaultProps = {
  handleColor() {},
};
