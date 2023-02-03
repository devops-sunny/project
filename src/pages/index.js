import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import FormBuilder from "./FormBuilder/FormBuilder";

import NotFound from "../components/NotFound";
import Pages1 from "./Pages1/Pages1";
import Pages2 from "./Pages2/Pages2";

const Routers = () => {
  const Auth = [
    { path: "/", components: <FormBuilder /> },
    { path: "/page1", components: <Pages1 /> },
    { path: "/page2", components: <Pages2 /> },
  ];

  return (
    <Router>
      <Routes>
        <Route>
          {Auth.map((privateAuth) => {
            return (
              true && (
                <Route
                  path={privateAuth.path}
                  element={privateAuth.components}
                />
              )
            );
          })}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};
export default Routers;
