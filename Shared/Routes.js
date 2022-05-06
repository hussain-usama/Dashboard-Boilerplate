import React from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import Login from "../Auth/Login/login.js";
import SignUp from "../Auth/SignUp/SignUp.js";
import AdminRoutes from "../Admin/AdminRoutes/AdminRoutes.js";
import UserRoutes from "../User/UserRoutes/UserRoutes.js";

function Routes(props) {
  return props.UserType === "admin" ? (
    <AdminRoutes history={props.history} />
  ) : props.UserType === "user" ? (
    <UserRoutes history={props.history} />
  ) : (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Redirect to="/login" />
    </Switch>
  );
}

const mapStateToProps = (state) => {
  return {
    UserType: state.UserReducer.userType,
  };
};

export default connect(mapStateToProps, {})(withRouter(Routes));
