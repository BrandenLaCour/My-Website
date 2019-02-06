import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class ProductSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Blog Post Name</h2>
            <h5 className={classes.description}>
              <p>
                Bacon ipsum dolor amet ball tip strip steak pork belly meatball
                short loin, tri-tip tail ham hock doner jowl alcatra ham. Ground
                round brisket strip steak sausage pancetta spare ribs. Pork
                belly bresaola drumstick fatback. Sausage corned beef turducken
                short ribs t-bone pork belly shank pig beef ribs tongue
                prosciutto.
              </p>
              <p>
                Buffalo cow swine, venison meatball alcatra filet mignon pork
                loin ribeye pork. Burgdoggen tri-tip salami porchetta turducken.
                Pig chuck kielbasa fatback, corned beef burgdoggen swine cow
                ribeye flank. Tri-tip sausage chicken tongue buffalo drumstick.
                Cupim ham hock kielbasa jerky beef ribeye tongue turkey. Sausage
                meatloaf pork chop beef turducken alcatra.
              </p>
              <p>
                Spare ribs pastrami meatloaf prosciutto, cupim swine turkey
                jerky short loin shank andouille pork sirloin ground round. Beef
                porchetta cupim sausage shoulder. Meatball shankle drumstick pig
                kevin. Ribeye ham bacon, frankfurter boudin shankle kevin
                buffalo pastrami doner fatback bresaola pancetta porchetta.
                Flank tri-tip porchetta t-bone jerky ham.
              </p>
              <p>
                Bacon ipsum dolor amet ball tip strip steak pork belly meatball
                short loin, tri-tip tail ham hock doner jowl alcatra ham. Ground
                round brisket strip steak sausage pancetta spare ribs. Pork
                belly bresaola drumstick fatback. Sausage corned beef turducken
                short ribs t-bone pork belly shank pig beef ribs tongue
                prosciutto.
              </p>
              <p>
                Buffalo cow swine, venison meatball alcatra filet mignon pork
                loin ribeye pork. Burgdoggen tri-tip salami porchetta turducken.
                Pig chuck kielbasa fatback, corned beef burgdoggen swine cow
                ribeye flank. Tri-tip sausage chicken tongue buffalo drumstick.
                Cupim ham hock kielbasa jerky beef ribeye tongue turkey. Sausage
                meatloaf pork chop beef turducken alcatra.
              </p>
              <p>
                Spare ribs pastrami meatloaf prosciutto, cupim swine turkey
                jerky short loin shank andouille pork sirloin ground round. Beef
                porchetta cupim sausage shoulder. Meatball shankle drumstick pig
                kevin. Ribeye ham bacon, frankfurter boudin shankle kevin
                buffalo pastrami doner fatback bresaola pancetta porchetta.
                Flank tri-tip porchetta t-bone jerky ham.
              </p>
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer />
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductSection);
