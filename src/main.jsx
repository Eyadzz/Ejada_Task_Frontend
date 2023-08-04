import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LoginForm from "./Login.jsx";
import AdminPanel from "./AdminPanel.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
         <Routes>
             <Route path={"/"} element={<LoginForm/>}/>
             <Route path={"/admin"} element={<AdminPanel/>}/>
         </Routes>
     </BrowserRouter>
  </React.StrictMode>,
)
