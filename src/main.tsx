import React from "react"; // Import React for JSX
import { createRoot } from "react-dom/client";
import App from "./App"; // Import without .tsx
import "bootstrap/dist/css/bootstrap.css";

// Create a root for the React application
const root = createRoot(document.getElementById("root")!);

// Render the App component
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
