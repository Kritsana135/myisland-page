import { makeStyles, Grid } from "@material-ui/core";
import PlaceCard from "./PlaceCard";

const useStyles = makeStyles(({ breakpoints }) => ({
  layout: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
  },
  root: {
    flexGrow: 1,
  },
  gridSpace: {
    padding: "0.5rem",
    [breakpoints.between("xs", "sm")]: {
      padding: "0.5rem 2rem",
    },
  },
}));

const isLands = [
  {
    name: "Bora Bora",
    description: `Shaped like a giant sombrero, this lush volcanic island stars in countless South Pacific fantasies. The focal point and best asset of this tropical beauty is its ravishing lagoon in technicolor turquoise. Fish, turtles, sharks, and rays swim in the clear waters.`,
    image: `${process.env.PUBLIC_URL}/assets/island1.jpg`,
  },
  {
    name: "Green",
    description: `The Maldives are home to some of the world's most ravishing islands, but it's the sea, which truly makes these islands shine. Luminous aquamarine waters with a crystal clarity lap upon these dazzling white shores, which barely peek above the Indian Ocean.`,
    image: `${process.env.PUBLIC_URL}/assets/island2.jpg`,
  },
];

function Place() {
  const classes = useStyles();

  return (
    <div className={classes.layout} id="place-to-visit">
      <Grid container className={classes.root} justify="center">
        {isLands.map(({ name, description, image }) => {
          return (
            <Grid item key={name} className={classes.gridSpace}>
              <PlaceCard name={name} description={description} image={image} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default Place;
