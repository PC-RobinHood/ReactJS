
import React from "react";
import { Link } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "components/CustomButtons/Button.jsx";
import headerLinksStyle from "assets/jss/app/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link to="/" className={classes.navLink}>
          Home
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/WhoWeAre" className={classes.navLink}>
          Who We Are
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/WhatWeDo" className={classes.navLink}>
          What We Do
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/Events" className={classes.navLink}>
          Events
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/Contact" className={classes.navLink}>
          Contact
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);