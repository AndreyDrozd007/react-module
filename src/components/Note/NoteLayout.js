import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

import { CardActiveColor, CardWrapper } from "../../styled";
import {FormatDisplay} from "../../utils/utils";

const NoteLayout = ({
  note: { id, title, description, date },
  handleClick,
  activeNote,
}) => (
  <CardWrapper>
    <Card elevation={10} onClick={() => handleClick(id)}>
      <CardActiveColor active={activeNote === id ? 1 : undefined}>
        <CardContent>
          <Typography variant="h5">{title}</Typography>
          {activeNote !== id && (
            <>
              <Typography variant="subtitle2">
                {FormatDisplay(description)}..
              </Typography>
              <div>{date}</div>
            </>
          )}
          {activeNote === id && (
            <CardContent>
              <Typography variant="body2">{description}</Typography>
              <div>{date}</div>
            </CardContent>
          )}
        </CardContent>
      </CardActiveColor>
    </Card>
  </CardWrapper>
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
