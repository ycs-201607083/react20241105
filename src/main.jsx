import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MyApps from "./apps/MyApp80.jsx";
// import MyApps from "./practice/App76.jsx";
import { Provider } from "./components/ui/provider.jsx";
import {Toaster} from "./components/ui/toaster.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Provider>
            <MyApps />
            <Toaster/>
        </Provider>
  </StrictMode>,
);
