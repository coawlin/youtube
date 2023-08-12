import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Video from "./pages/Video.tsx";

const router = createBrowserRouter([
  {
    path: "/youtube-clone/*",
    element: <App />,
    children: [
      {
        path: "video/:id",
        element: <Video />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
