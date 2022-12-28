import React, { useEffect } from 'react'
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { array } from "yup";
import { RootState } from "../redux/configStore";
import { ACCESS_TOKEN, USER_LOGIN } from '../util/cofig';

type Props = {};

export default function Header({}: Props) {
  const {arrLogin}=useSelector((state:RootState)=>state.userReducer);
  // console.log(arrLogin?.hoTen);
  const renderUserLogin=()=>{
    if(arrLogin?.email){
      return <>
       <div className="nav-bar-register flex-item">
          <NavLink to={"/register"} style={{display:'none'}}>Register</NavLink>
        </div>
        <div className="nav-bar-login flex-item">
        {/* <NavLink to={"/login"}>Login</NavLink> */}
        <NavLink to={"/login"} style={{
      }}>{arrLogin.hoTen}</NavLink>
    <button className='btn btn-danger logout' onClick={()=>{
      localStorage.removeItem(ACCESS_TOKEN);
      localStorage.removeItem(USER_LOGIN);
      window.location.href=('/')
    }}>Đăng xuất</button>
        </div>
      </>
    }
      return <>
       <div className="nav-bar-register flex-item">
          <NavLink to={"/register"} style={{display:'block'}}>Đăng ký</NavLink>
        </div>
        <div className="nav-bar-login flex-item">
        {/* <NavLink to={"/login"}>Login</NavLink> */}
        <NavLink to={"/login"} style={{
      }}>Đăng nhập</NavLink>
        </div>
      </>
  }

  useEffect(()=>{
    renderUserLogin()
  },[])
  
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
        {renderUserLogin()}
      </div>
    </div>
  );
}
