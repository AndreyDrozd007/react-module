import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AppBlock } from "./styled";
import MainMenu from "pages/MainMenu/MainMenu";
import MyNotes from "pages/MyNotes/MyNotes";
import SharedNotes from "pages/SharedNotes/SharedNotes";
import About from "pages/About/About";
import NotFound from "pages/NotFound/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <AppBlock>
        <MainMenu />
        <Routes>
          <Route path="/" element={<Navigate to={"notes"} />} />
          <Route path="notes" element={<MyNotes />} />
          <Route path="shared-notes" element={<SharedNotes />} />
          <Route path="about" element={<About />} />
          <Route path="not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate to={"not-found"} />} />
        </Routes>
      </AppBlock>
    </BrowserRouter>
  );
}
