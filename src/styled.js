import {styled} from "@mui/system";

export const AppBlock = styled('div')({
    maxWidth: 500,
    margin: "0 auto",
    boxSizing: "border-box",
})

export const ActiveNoteBlock = styled("h3")({
    color:  "#00BFFF",
});

export const CardWrapper = styled("div")({
    marginTop: 20,
});

export const CardActiveColor = styled("div")(({props}) => ({
    color: props ? "#00BFFF" : null,
}));