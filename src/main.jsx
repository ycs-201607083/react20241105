import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import MyApps from "./apps/MyApp24.jsx";
import MyApps from "./practice/App24.jsx";
import {Provider} from "./components/ui/provider.jsx"

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Provider>
            <MyApps/>
        </Provider>

  </StrictMode>
);
