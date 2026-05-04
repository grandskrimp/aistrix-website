import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.jsx";
import AnalyticsProvider from "./components/analytics/AnalyticsProvider.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <AnalyticsProvider>
          <App />
        </AnalyticsProvider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
);
