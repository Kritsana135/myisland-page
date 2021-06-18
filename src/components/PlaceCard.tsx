import {
  Card,
  Collapse,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect, useState } from "react";
import useScroll from "../hook/useScroll";

const useStyles = makeStyles(({ breakpoints }) => ({
  cardRoot: {
    maxWidth: 600,
    background: "rgba(0,0,0,0.5)",
    color: "white",
  },
  media: {
    height: "30vh",
    [breakpoints.up("lg")]: {
      height: "40vh",
    },
  },
  title: {
    fontFamily: "nunito",
    fontSize: "2rem",
    fontWight: "bold",
  },
  description: {
    fontFamily: "nunito",
    fontSize: "1.1rem",
    color: "#ddd",
  },
}));

type PlaceCardProps = {
  name: string;
  description: string;
  image: string;
};

export default function PlaceCard({
  name,
  description,
  image,
}: PlaceCardProps) {
  const classes = useStyles();
  // const [checked, setChecked] = useState(false);
  const {checked} = useScroll("header")
  
  // useEffect(() => {
  //   setChecked(true);
  // }, []);

  return (
    <Collapse in={checked} timeout={1000}>
      <Card className={classes.cardRoot}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={image}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h1"
              component="h1"
              className={classes.title}
            >
              {name}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.description}
            >
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Collapse>
  );
}
