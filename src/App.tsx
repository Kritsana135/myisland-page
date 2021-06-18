import { makeStyles } from "@material-ui/core";
import Header from "./components/Header";
import Place from "./components/Place";

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/bg.jpg"})`,
    backgroundSize: "cover",
    fontFamily: "nunito",
    color: "white",
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <Place />
    </div>
  );
}

export default App;
