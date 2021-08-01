import React from "react";
import ReactDOM from "react-dom";

import { AuthProvider } from "./context/auth";
import { UserProvider } from "./context/user";

import App from "./App";

import "./styles/global.css";

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
