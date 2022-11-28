import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router} from "react-router-dom";
import { DataProvider } from './context/DataContext';
import { AuthProvider } from './context/AuthContext';
import { Provider } from "react-redux";
import Store from "./Store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={Store}>
 
 <Router>
     <AuthProvider>
        <DataProvider>
          <App />
        </DataProvider>
      </AuthProvider>
      </Router>
  </Provider>
);
