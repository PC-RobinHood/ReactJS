import React from "react"
import ReactDOM from "react-dom"
import { createBrowserHistory } from "history"
import { Router, Route, Switch } from "react-router-dom"

import "../src/assets/scss/style.scss"

import Home from "./views/Home/Home"
import Who from "./views/Who/Who"
import What from "./views/What/What"
import Get from "./views/Get/Get"
import Events from "./views/Events/Events"
import Donate from "./views/Donate/Donate"
import Contact from "./views/Contact/Contact"

var hist = createBrowserHistory()

ReactDOM.render(
    <Router history={hist}>
        <Switch>
            <Route path="/" component={Home} />
            <Route path="/WhoWeAre" component={Who} />
            <Route path="/WhatWeDo" component={What} />
            <Route path="/GetInvolved" component={Get} />
            <Route path="/Events" component={Events} />
            <Route path="/Donate" component={Donate} />
            <Route path="/Contact" component={Contact} />
        </Switch>
    </Router>,
    document.getElementById("root")
)