// Context Provider
import { AuthProvider } from "./context/auth";
import { UserProvider } from "./context/user";

// React
import React from "react";
import ReactDOM from "react-dom";

// Styles
import "./styles/global.css";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
