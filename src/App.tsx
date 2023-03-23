import React from "react";
import BusinessRoute from "./components/AllRoutes/BusinessRoute";
import HomeRoute from "./components/AllRoutes/HomeRoute";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div>
      <HomeRoute />
      {/* <PrivateRoute> */}
      <BusinessRoute />
      {/* </PrivateRoute> */}
    </div>
  );
}

export default App;
