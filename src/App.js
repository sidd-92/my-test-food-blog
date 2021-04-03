import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { linkNameHome, linkHome } from "./routes";
const DefaultLayout = React.lazy(() => import("./containers/DefaultLayout"));
class App extends React.Component {
  render() {
    return (
      <Router>
        <React.Suspense fallback={<div>Loading..</div>}>
          <Switch>
            <Route
              path={linkHome}
              name={linkNameHome}
              render={(props) => <DefaultLayout {...props} />}
            />
          </Switch>
        </React.Suspense>
      </Router>
    );
  }
}

export default App;
