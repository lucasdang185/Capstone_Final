import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/scss/style.scss";

// cau hinh react router dom
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomeTeamplate from "./templates/HomeTeamplate";
import Home from "./pages/home/Home";
import Detail from "./pages/detail/Detail";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";



//cau hionh redux

import { Provider } from "react-redux";
import { store } from "./redux/configStore";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<HomeTeamplate />}>
          <Route index element={<Home />}></Route>
          <Route path='home' element={<Home />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path='detail'>
            <Route path="id" element={<Detail />}></Route>
          </Route>
          <Route path='*' element={<Navigate to="" />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
