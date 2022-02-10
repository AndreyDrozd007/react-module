import { styled } from "@mui/system";
import TextField from "@mui/material/TextField";

export const AppBlock = styled("div")({
  maxWidth: 500,
  margin: "0 auto",
  boxSizing: "border-box",
});

export const ActiveNoteBlock = styled("h2")({
  color: "#00BFFF",
});

export const CardWrapper = styled("div")({
  marginTop: 20,
  marginBottom: 20,
});

export const CardActiveColor = styled("div")(({ active }) => ({
  color: active ? "#00BFFF" : "#000000",
  "&:hover": {
    cursor: "pointer",
  },
}));

export const StyledTextField = styled(TextField)({
  padding: 5,
})
