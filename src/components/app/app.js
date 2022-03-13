import React from "react";
import { Route, Routes } from "react-router-dom";

import { SchedulePage } from "../pages";
import Page404 from "../page-404-content";

import './app.scss';


const App = () => {
  return (
    <Routes>
      <Route path={'/'}>
        <Route index exact element={<SchedulePage/>}/>
        <Route path={'*'} element={<Page404/>}/>
      </Route>
    </Routes>
  );
};

export default App;