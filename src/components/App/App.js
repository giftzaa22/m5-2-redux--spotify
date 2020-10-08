import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import GlobalStyles from "GlobalStyles";

import ArtistRoute from "./artistRoute";

const DEFAULT_ARTIST_ID = "2CIMQHirSU0MQqyYHq0eOx";

const App = () => {
  React.useEffect(() => {
    fetch("/spotify_access_token")
      .then((res) => res.json())
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <Router>
        <ArtistRoute />
        <Redirect to={`/artist/${DEFAULT_ARTIST_ID}`} />
        <GlobalStyles />
      </Router>
    </>
  );
};

export default App;
