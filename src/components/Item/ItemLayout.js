import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { CardActiveColor, CardWrapper } from "../../styled";

const ItemLayout = ({
  note: { id, title, description, date },
  handleClick,
  activeNote,
}) => {
  return (
    <CardWrapper>
      <Card elevation={10} onClick={() => handleClick(id)}>
        <CardActiveColor active={activeNote === id ? 1 : undefined}>
          <CardContent>
            <Typography variant="h5">{title}</Typography>
            {activeNote !== id && (
              <>
                <Typography variant="subtitle2">
                  {description.substring(0, 20)}...
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
};

export default ItemLayout;
