import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Converter from "../Converter/Converter";
import Rates from "../Rates/Rates";

const AppRouter = () => {
    return (
        <Switch>
            <Route exact={true} path="/converter" component={Converter} />
            <Route exact={true} path="/rates" component={Rates} />
            <Redirect to="/converter" />
        </Switch>
    );
};

export default AppRouter;
