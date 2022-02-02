import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppBlock } from "./styled";
import MainMenu from "pages/MainMenu/MainMenu";
import { ROUTES } from "config/constants";

export default function App() {
  const RouteComponents = ROUTES[0].map(({ path, element, id }, route) => (
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
