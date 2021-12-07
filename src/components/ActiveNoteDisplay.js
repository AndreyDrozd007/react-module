import { useStyles } from "../styles/styles";
import Typography from "@material-ui/core/Typography";

const ActiveNoteDisplay = (props) => {
    const classes = useStyles(props);

  return(
    <div className={classes.root} >
      <Typography variant="h5" component="p">
          Select note to display
      </Typography>
    </div>
    )
};

export default ActiveNoteDisplay;