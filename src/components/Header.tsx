import React from "react";
import { NavLink } from "react-router-dom";

type Props = {};

export default function Header({}: Props) {
  return (
    <div className="header">
      <div className="logo">
        <NavLink to={""}>
          <img src="./img/logo3.png" alt="logo" width={200} />
        </NavLink>
        <div className="list flex-item">
          <NavLink to={"/list"}>
            <i className="fa-solid fa-bars" style={{ fontSize: "22px" }}></i>
            Danh mục khóa học
          </NavLink>
        </div>
      </div>
      <div className="nav-bar-search">
        <div className="search  flex-item">
          <div className="input">
            <input type="text" placeholder="Nhập tên tìm kiếm" />
          </div>
          <div className="icon-search">
            <NavLink to={"/search"}>
              <i className="fa fa-search"></i>
            </NavLink>
          </div>
        </div>
        <div className="register flex-item">
          <NavLink to={"/register"}>Register</NavLink>
        </div>
        <div className="login flex-item">
          <NavLink to={"/login"}>Login</NavLink>
        </div>
      </div>
    </div>
  );
}
