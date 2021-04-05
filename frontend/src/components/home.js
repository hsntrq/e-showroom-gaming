import React, { Component } from "react";
import Products from './products'
// import RoomJoinPage from "./RoomJoinPage";
// import CreateRoomPage from "./CreateRoomPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <Redirect to="/home" />;
            }}
          />
          <Route exact path="/home" component={Products}/>
          {/* <Route path="/join" component={RoomJoinPage} />
          <Route path="/create" component={CreateRoomPage} /> */}
        </Switch>
      </Router>
    );
  }
}
