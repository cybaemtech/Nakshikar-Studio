import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { getRouter } from "./router";
import "./styles.css";

// Cleanly remove initial static prerender tags before React initializes so React 19's
// HeadContent manages the document head natively without duplicate tags in the DOM.
if (typeof document !== "undefined") {
  document.querySelectorAll("[data-prerender]").forEach((el) => el.remove());
}

const router = getRouter();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
