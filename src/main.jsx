import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import MyApps from "./apps/MyApp24.jsx";
import MyApps from "./practice/App24.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
      <MyApps/>
  </StrictMode>
);
