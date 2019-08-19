import React from "react"
import ReactDOM from "react-dom"
import { createBrowserHistory } from "history"
import { Router, Route, Switch } from "react-router-dom"

import "assets/scss/style.scss"

import Home from "views/Home/Home.jsx"
import Who from "views/Who/Who.jsx"
import What from "views/What/What.jsx"
import Get from "views/Get/Get.jsx"
import Events from "views/Events/Events.jsx"
import Donate from "views/Donate/Donate.jsx"
import Contact from "views/Contact/Contact.jsx"

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