import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import routes from "../routes";
import Navbar from "../components/Navbar/Navbar";
class DefaultLayout extends React.Component {
  render() {
    return (
      <div>
        <Navbar location={this.props.location} history={this.props.history} />
        <main>
          <React.Suspense fallback={<div>Loading...</div>}>
            <Switch>
              {routes.map((route, idx) => {
                return route.component ? (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={(props) => <route.component {...props} />}
                  />
                ) : null;
              })}
            </Switch>
          </React.Suspense>
        </main>
      </div>
    );
  }
}

export default DefaultLayout;
