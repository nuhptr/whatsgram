import React from "react"
import ReactDOM from "react-dom/client"

import App from "./App.tsx"
import { BrowserRouter } from "react-router-dom"

ReactDOM.createRoot(document.getElementById("root")!).render(
   <React.StrictMode>
      {/* Implement browser router here */}
      <BrowserRouter>
         <App />
      </BrowserRouter>
   </React.StrictMode>
)
