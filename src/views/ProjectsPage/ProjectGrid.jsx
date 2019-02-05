import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import faceFinder from "../../assets/img/faceFinder.jpg";
import website from "../../assets/img/Website.jpg";
import weatherTime from "../../assets/img/weatherTime.png";
import "./Projects.css";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    paddingBottom: "75px",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 800,
    height: 700
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  }
});
const tileData = [
  {
    img: website,
    title: "This Website",
    desc: "This website was built with React.js and Material Ui",
    cols: 2,
    tools: "React.Js, Material Ui,",
    link: "https://github.com/BrandenLaCour/My-Website"
=======
    link: "https://github.com/BrandenLaCour"
>>>>>>> d010dadb7ba1b7cae0a3ae270fb2b5fbbf0a6add
  },
  {
    img: faceFinder,
    title: "Face Finder",
    desc: "An application that uses a machine learning api to detects faces.",
    cols: 2,
    tools: "React.js, Tachyons, Node.js, Express, PostgreSQL",
    link: "https://brandenlacour.github.io/face-finder/"
  },
  {
    img: weatherTime,
    title: "Weather Time",
    desc:
      "Through forward Geocoding, this app takes user input, and displays the weather using Dark Sky's api. ",
    cols: 2,
    tools: "React.js, Boostrap, Material Ui",
    link: "https://weathertime67.herokuapp.com/"
  }
];

const handleClick = link => {
  window.location.assign(link);
};

function TitlebarGridList(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: "auto" }} />
        {tileData.map(tile => (
          <GridListTile
            key={tile.img}
            className="grow"
            classN
            onClick={() => handleClick(tile.link)}
            cols={tile.cols || 1}
          >
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>{tile.desc}</span>}
              actionIcon={
                <IconButton className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

TitlebarGridList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TitlebarGridList);
