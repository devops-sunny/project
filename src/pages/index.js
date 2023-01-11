import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";


import FormBuilder from "./FormBuilder/FormBuilder";

import NotFound from "../components/NotFound";

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<FormBuilder />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};
export default Routers;
