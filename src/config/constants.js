import { Navigate } from "react-router-dom";
import Notes from "pages/MyNotes/Notes";
import SharedNotes from "pages/SharedNotes/SharedNotes";
import About from "pages/About/About";
import NotFound from "pages/NotFound/NotFound";
import Tab from "@mui/material/Tab";

export const ROUTES = [
  [
    { path: "/", element: <Navigate to={"notes"} />, id: 0 },
    { path: "/notes", element: <Notes />, id: 1 },
    { path: "/shared-notes", element: <SharedNotes />, id: 2 },
    { path: "/about", element: <About />, id: 3 },
    { path: "/not-found", element: <NotFound />, id: 4 },
    { path: "/*", element: <Navigate to={"not-found"} />, id: 5 },
  ],
  [
    { pathname: "/notes", element: <Tab />, label: "My Notes", id: 0 },
    {
      pathname: "/shared-notes",
      element: <Tab />,
      label: "Shared Notes",
      id: 1,
    },
    { pathname: "/about", element: <Tab />, label: "About", id: 2 },
  ],
  [
    {
      pathname: "/notes",
      element: <Tab />,
      label: "Go back the main Page",
      id: 0,
    },
  ],
];
