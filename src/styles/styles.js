import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    App: {
      maxWidth: 500,
      margin: "0 auto",
      boxSizing: "border-box",
    },
    root:{
        marginTop: 20,
      },
    
      noteColor: {
        color: '#000000'
      },
      activeColor:{
        color: '#00BFFF'
    },  
  });
  export {useStyles};