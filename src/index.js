import { StrictMode } from "react";
import { createRoot } from "react-dom/client"; // React 18 root API

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement); // React 18 root element

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
