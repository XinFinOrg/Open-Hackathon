// ** Router Import
import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import app from ".";
import { observer } from 'mobx-react';
import { routes } from "../utils";
import ModalShared from "../components/modal-shared/ModalShared";

const App = observer(() => {

  React.useEffect(() => {
    app.vars.initializeVars();
  }, []);

  return (
    <Router>
      <ModalShared></ModalShared>
      <Switch>
        <Suspense
          fallback={
            <div className="main-body">
              <div>Loading... </div>
            </div>
          }
        >
          {routes.map((route, i) => {
            return (
              <Route
                key={i}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            );
          })}
        </Suspense>
      </Switch>
    </Router>
  );
});

export default App;
