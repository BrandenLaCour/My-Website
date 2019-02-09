import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Code from "@material-ui/icons/Code";
import VerifiedUser from "@material-ui/icons/VerifiedUser";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import ImportantDevices from "@material-ui/icons/ImportantDevices";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class ProductSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Let's Talk About Flow</h2>
            <h5 className={classes.description}>
              One of the most important things as a Developer is to work well as
              a team, follow proper version control, and writing clean code that
              others can navigate easily. My foundation is in Agile development
              using Jira for issue tracking. This way the development track can
              stay on point and change depending on the clients goal week to
              week. Finally, using&nbsp;
              <a href="https://danielkummer.github.io/git-flow-cheatsheet/">
                git flow
              </a>{" "}
              to ensure proper version control while working on a team.
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="React.js, Redux"
                description="React is an amazing library. I enjoy working with it because it has a simple, yet complex structure. The use of components
                makes it easy to read the code, as well as organize files and dependencies. Redux is also an amazing state management tool once an App becomes fairly large. The ability to access state without passing it down widely increases productivity and organization of state. Did you know this website is actually a react app?"
                icon={Code}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Bootstrap/Material Ui"
                description="Two amazing yet very different tools for constructing a responsive, and beautiful UI. I have worked with both, and enjoy them for their respective roles. 
                Material Ui is great because you have components already made that you can use, that only import the dependancies they need. Finally, Bootstrap is wonderful due to the simplification of dealing with css, and making things responsive."
                icon={ImportantDevices}
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Node.js/PostgreSQL"
                description="Yes, you read that right. I also understand back end technologies, building a Node server, handling Api requests, connecting the database to the server, updating the database and more."
                icon={VerifiedUser}
                iconColor="danger"
                vertical
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductSection);
