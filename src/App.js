import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { AppBlock } from "./styled";
import MainMenu from "pages/MainMenu/MainMenu";
import Notes from "pages/MyNotes/Notes";
import SharedNotes from "pages/SharedNotes/SharedNotes";
import About from "pages/About/About";
import NotFound from "pages/NotFound/NotFound";
import {
  NOTES,
  SHARED_NOTES,
  ABOUT,
  NAVIGATE_NOTES,
  NAVIGATE_NOT_FOUND,
  NOT_FOUND,
} from "config/constants";

export default function App() {
  const ROUTES = [
    { path: NAVIGATE_NOTES, element: <Navigate to={"/notes"} />, id: 0 },
    { path: NOTES, element: <Notes />, id: 1 },
    { path: SHARED_NOTES, element: <SharedNotes />, id: 2 },
    { path: ABOUT, element: <About />, id: 3 },
    { path: NOT_FOUND, element: <NotFound />, id: 4 },
    {
      path: NAVIGATE_NOT_FOUND,
      element: <Navigate to={"/not-found"} />,
      id: 5,
    },
  ];
  const RouteComponents = ROUTES.map(({ path, element, id }, route) => (
    <Route path={path} element={element} route={route} key={id} />
  ));
  return (
    <BrowserRouter>
      <AppBlock>
        <MainMenu />
        <Routes>{RouteComponents}</Routes>
      </AppBlock>
    </BrowserRouter>
  );
}
