import React from "react";
import Note from './components/Note'
import { useStyles } from "./styles/styled";

function App (props) {
    const classes = useStyles(props);

    return(
        <div className={classes.App}>
            <Note/>
        </div>
    )
}

export default App;