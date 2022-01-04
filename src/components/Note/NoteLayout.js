import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import PropTypes from "prop-types";

import MyInput from "../MyInput/MyInput";
import { CardActiveColor, CardWrapper } from "../../styled";
import {FormatDisplay} from "../../utils/utils";


const NoteLayout = ({
  note: { id, title, description, date },
  handleClick,
  activeNote,
  editNote,
  edit,
  valueTitle,
  setValueTitle,
  valueDescription,
  setValueDescription,
  saveChangesNote,
}) => (
  <>
    <CardWrapper>
      <Card elevation={10} onClick={() => handleClick(id)}>
        <CardActiveColor active={activeNote === id ? 1 : undefined}>
          <CardContent>
            {edit === id ? (
              <MyInput inputValue={valueTitle} setValue={setValueTitle} />
            ) : (
              <Typography variant="h5">{title}</Typography>
            )}

            <>
              {edit === id ? (
                <div>
                  <MyInput
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
                  {FormatDisplay(description)}..
                </Typography>
              )}
              <div>{date}</div>
            </>

            {activeNote === id && (
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
  </>
);

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
