import React from "react";
import ReactDOM from "react-dom";
import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";
import App from "./components/App";
import { TweetProvider } from "./components/Tweet/TweetContext";

ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(
  <TweetProvider>
    <App />
  </TweetProvider>,
  document.getElementById("root")
);
