import React from "react";
import Note from './components/Note'
import {styled} from '@mui/system';

const AppBlock = styled('div')({
    maxWidth: 500,
    margin: "0 auto",
    boxSizing: "border-box",
  })

export default function App () {
    return(
        <AppBlock>
            <Note/>
        </AppBlock>
    )
};