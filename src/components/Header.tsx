import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { array } from "yup";
import { RootState } from "../redux/configStore";
import { DanhMucKhoaHocResult, getCourseApi, getCourseListApi, getKhoaHocApi } from '../redux/elearningReducer/elearningReducer';
import { ACCESS_TOKEN, USER_LOGIN } from '../util/cofig';
import {AppDispatch} from '../redux/configStore'

type Props = {};


export type danhMucModel={
  tenDanhMuc:string;
  maDanhMuc:string;
}

const arrList=[
  {tenDanhMuc:'Lập trình Back end',maDanhMuc:'Backend'},
  {tenDanhMuc:'Lập trình Front end',maDanhMuc:'Frontend'},
  {tenDanhMuc:'Tư duy lập trình',maDanhMuc:'TuDuy'},
  {tenDanhMuc:'Web',maDanhMuc:'Design'},
  {tenDanhMuc:'Lập trình di động',maDanhMuc:"DiDong"}
]

export default function Header({}: Props) {
  const dispatch=useDispatch()
  const {arrLogin}=useSelector((state:RootState)=>state.userReducer);
  const {arrCourseList,arrKhoaHoc}=useSelector((state:RootState)=>state.elearningReducer)
  console.log('maDanhMuc'+arrCourseList[0]?.maDanhMuc)
  // console.log('tenDanhMuc'+arrList[0].tenDanhMuc)
  // console.log(arrKhoaHoc)



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
 
 
  const submitDanhMuc = (tenDanhMuc:string) => {
    // if()
    const action = getCourseListApi(tenDanhMuc);
    console.log('tendanhmuc:'+tenDanhMuc)
    dispatch(action);
  }
  const submitKhoaHoc=(maDanhMuc:string)=>{
    if(maDanhMuc!==undefined){
    const action=getKhoaHocApi(maDanhMuc);
    console.log('maDanhMuc'+maDanhMuc)
    console.log(maDanhMuc)
    dispatch(action);
    }

  }

  const renderList=()=>{
    return <>
    {arrList.map((item:danhMucModel,index:number)=>{
      return(
        <NavLink to={'/courseList'} key={index} onClick={()=>{
          submitDanhMuc(item.tenDanhMuc)
          submitKhoaHoc(item.maDanhMuc)
        }}>
        <li >{item.tenDanhMuc}</li>
        </NavLink>
      )
    })}
    </>
  }



 

  
  
  return (
    <div className="header">
      <div className="logo">
        <NavLink to={""}>
          <img src="./img/logo3.png" alt="logo" width={200} />
        </NavLink>
        <div className='d-flex'>
        <div className="list flex-item">
          <NavLink to={"/courseList"}>
            <i className="fa-solid fa-bars" style={{ fontSize: "22px" }}></i>
            <i className="fa-solid fa-chevron-down"></i>
            Danh mục khóa học
          </NavLink>
        </div>
        <div className='name-course'>
            <ul>
              {/* <li id='Lập trình Backend' onClick={()=>{
                submitDanhMuc(`${123}`)
              

              // alert(tenDanhMuc)
              }}>Lập trình Backend</li>
              <li id='Lập trình Front end'>Lập trình Front end</li>
              <li id='Thiết kế Web'>Thiết kế Web</li>
              <li id='Lập trình di động'>Lập trình di động</li>
              <li id='Lập trình Full Stack'>Lập trình Full Stack</li>
              <li id='Tư duy lập trình'>Tư duy lập trình</li> */}
              {renderList()}
            </ul>
          </div>
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
