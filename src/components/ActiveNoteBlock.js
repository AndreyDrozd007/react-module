import {styled} from '@mui/system';

const ActiveNoteBlock = styled("h3")({
  color: "#00BFFF",
})

export default function ActiveNote(){
  return(
      <ActiveNoteBlock>
          Select note to display
      </ActiveNoteBlock>
    )
};