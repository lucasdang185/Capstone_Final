import React from 'react'
import {Formik, useFormik} from 'formik'
import *as yup from 'yup'
import { DispatchType, RootState } from '../../redux/configStore';
import { useDispatch, useSelector } from 'react-redux';
import { postUserLoginApi } from '../../redux/userReducer/userReducer';
import { NavLink } from 'react-router-dom';
// import { postUserLoginApi } from '../../redux/userReducer/userReducer';

export interface userLoginModel{
  taiKhoan:string,
  matKhau:string
}

type Props = {}

export default function Login({}: Props) {
  const {arrLogin}=useSelector((state:RootState)=>state.userReducer)
  const dispatch:DispatchType=useDispatch();
  const frm = useFormik<userLoginModel>({
    initialValues: {
      taiKhoan: "",
      matKhau: ""
    },
    validationSchema: yup.object().shape({  
      taiKhoan:yup.string().required("Account is a required field !"),
      matKhau:yup.string().required("Password is a required field !"),}
    ),
    onSubmit: (values:userLoginModel) => {
      const action =postUserLoginApi(values)
      dispatch(action);
    },  
  })

  return (
    <div className='login'>
      <form className='container' onSubmit={frm.handleSubmit}>
      <img src="./img/logo1.png" alt="..." /> 
      <div className='form'>
        <h2>Đăng nhập </h2>
        <div className='form-body'>
          <p>Account </p>
          <input type="text" id='taiKhoan' placeholder='Input account' className='form-control' onChange={frm.handleChange} onBlur={frm.handleBlur} />
          {frm.errors.taiKhoan ? <p className='text-danger'>{frm.errors.taiKhoan}</p>:''}
          <br />
          <p>Password</p>
          <input type="text" id='matKhau' placeholder='Input password' className='form-control' onChange={frm.handleChange} onBlur={frm.handleBlur}/>
          {frm.errors.matKhau  ? <p className='text-danger'>{frm.errors.matKhau}</p>:''}
        
        </div>
        <div style={{textAlign:'right',
      marginRight:'20px'
      }}>
        <NavLink to={'/register'} style={{textDecoration:'',
            fontSize:'19px',
            fontWeight:400,
            textAlign:'center'
      }}>Đăng ký </NavLink>
        </div>
        <div className='form-footer'>
          <button className='btn btn-success' onClick={()=>{
            frm.handleSubmit()
          }}>Đăng nhập </button>
        </div>
      </div>
    </form>
    </div>
  )
}