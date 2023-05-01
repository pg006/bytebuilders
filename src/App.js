import React from "react";
import "./App.css";
import AllRoutes from "./Routes/AllRoutes";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "leaflet/dist/leaflet.css";
var ReactCSSTransitionGroup = require("react-addons-css-transition-group");

function App() {
  return (
    <React.Fragment>
      <AllRoutes />
      <ReactCSSTransitionGroup
        transitionName="example"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}
      >
      </ReactCSSTransitionGroup>
    </React.Fragment>
  );
}

export default App;
