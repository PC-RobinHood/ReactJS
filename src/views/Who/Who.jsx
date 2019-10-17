import React from "react";
import { Link } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import { Element, animateScroll as scroll } from "react-scroll";
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import whoStyle from "assets/jss/app/views/whoStyle.jsx";
import logo from "../../../assets/img/atom.jpg";

class Who extends React.Components {
    constructor() {
        super(prop);
        this.scrollToTop = this.scrollToTop.bind(this);
    }

    scrollToTop() {
        scroll.scrollToTop();
    }

    render() {
        const { classes, ...rest } = this.props;
        return (
            <div>
                <Header
                    brand=""
                    rightLinks={<HeaderLinks />}
                    fixed
                    color="transparent"
                    changeColorOnScroll={{
                        height: 100,
                        color: "white"
                    }}
                    {...rest}
                />
                <GridContainer className={classes.logo} >
                    <GridItem className={classes.logo} >
                        <Link to="/">
                            <img src={logo} className={classes.logo} ></img>
                        </Link>
                    </GridItem>
                </GridContainer>
                <div className={classes.section}>
                    <div className={classes.container}>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={8}>
                                <Element name="scroll1" className={classes.element}>
                                    <h4>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </h4>
                                </Element>
                            </GridItem>
                        </GridContainer>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default withStyles(whoStyle)(Who);
