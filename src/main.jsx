import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Overlay from "./components/ui/Overlay";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <React.Suspense fallback={<Overlay />}>
      <App />
    </React.Suspense>
  </React.StrictMode>
);
