import React from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import Feed from "../Routes/Feed";
import Auth from "../Routes/Auth";


const LoggedInRoutes = () => (
    <>
        <Route exact path="/" component={Feed} />
    </>
);

const LoggedOutRoutes = () => (
    <>
        <Route exact path="/" component={Auth} />
    </>
);

const AppRouter = ({ isLoggedIn }) => (
    isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />
);

AppRouter.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
};

export default AppRouter;