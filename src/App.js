import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { AppBlock } from "./styled";
import MainMenu from "components/MainMenu";
import Notes from "pages/MyNotes";
import SharedNotes from "pages/SharedNotes";
import About from "pages/About";
import NotFound from "pages/NotFound";
import { ROUTES } from "config/constants";

export default function App() {
  return (
    <BrowserRouter>
      <AppBlock>
        <MainMenu />
        <Routes>
          <Route path={ROUTES.NAVIGATE_NOTES} element={<Navigate to={ROUTES.NOTES} />} />
          <Route path={ROUTES.NOTES} element={<Notes />} />
          <Route path={ROUTES.SHARED_NOTES} element={<SharedNotes />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
          <Route path={ROUTES.NAVIGATE_NOT_FOUND} element={<Navigate to={ROUTES.NOT_FOUND} />} />
        </Routes>
      </AppBlock>
    </BrowserRouter>
  );
}
