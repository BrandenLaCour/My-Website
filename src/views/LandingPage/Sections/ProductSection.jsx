import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Code from "@material-ui/icons/Code";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
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
              others can navigate easily. My goal is to always to follow proper
              protocol right at the start, this makes debugging easier, and
              working as a team painless. This means following the don't repeat
              yourself rule, organizing component files well, commenting my
              code, and following{" "}
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
                title="React.js"
                description="React is an amazing library. I enjoy working with it because it has a simple, yet complex structure. The use of components
                makes it easy to read the code, as well as organize files and dependencies. You also can pair it with so many libraries such as bootstrap, tachyons, lodash, material ui, and more.
                Can you tell, this very website has been created with React?"
                icon={Code}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Bootstrap/Material Ui"
                description="Two amazing yet very different tools for constructing a responsive, and beautiful UI. I have worked with both, and enjoy them for their respective roles. 
                Material is great because you have already build components you can use, that only import the dependancies they need, then Bootstrap is great because it simplifies
                the process of dealing with Css in your project."
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
