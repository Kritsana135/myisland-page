import {
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Collapse,
} from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { Link as Scroll } from "react-scroll";

const useStyles = makeStyles(({ breakpoints }) => ({
  appBarContainer: {
    width: "100%",
    margin: "0 auto",
    [breakpoints.up("sm")]: {
      width: "80%",
    },
  },
  appBar: {
    background: "none",
  },
  icon: {
    fontSize: "2rem",
  },
  title: {
    flexGrow: 1,
  },
  greenText: {
    color: "#5AFF3D",
  },
  welcome: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    "& h1": {
      margin: 0,
      textAlign: "center",
      fontSize: "3rem",
      [breakpoints.up("sm")]: {
        fontSize: "4.5rem",
      },
    },
  },
  arrowIcon: {
    fontSize: "4rem",
  },
}));

function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <div id="header">
      <AppBar className={classes.appBar} elevation={0}>
        <Toolbar className={classes.appBarContainer}>
          <h1 className={classes.title}>
            My<span className={classes.greenText}>Island.</span>{" "}
          </h1>
          <IconButton edge="end" color="inherit" aria-label="menu">
            <SortIcon className={classes.icon} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div className={classes.welcome}>
        <Collapse in={checked} timeout={1000}>
          <h1>Welcome to</h1>
          <h1>
            My<span className={classes.greenText}>Island.</span>
          </h1>
          <Scroll to="place-to-visit" smooth={true}>
            <IconButton>
              <ExpandMoreIcon
                className={clsx(classes.arrowIcon, classes.greenText)}
              />
            </IconButton>
          </Scroll>
        </Collapse>
      </div>
    </div>
  );
}

export default Header;
