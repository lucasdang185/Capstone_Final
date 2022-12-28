import React, { useEffect } from 'react'
import {Formik} from 'formik'
import * as yup from 'yup'
import { useFormik } from 'formik'
import { getValue } from '@testing-library/user-event/dist/utils'
import { postUserRegisterApi } from '../../redux/userReducer/userReducer'
import { useDispatch } from 'react-redux'
import { DispatchType } from '../../redux/configStore'
import { NavLink } from 'react-router-dom'
type Props = {}

export type registerModel={
  taiKhoan: string;
  matKhau:  string;
  hoTen:    string;
  soDT:     string;
  maNhom:   string;
  email:    string;
}

export default function Register({}: Props) {
  const dispatch:DispatchType=useDispatch();
  const frm = useFormik<registerModel>({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      soDT: "",
      maNhom:'',
      email: "",
    },
    validationSchema: yup.object().shape({
      taiKhoan:yup.string().required("Account is a required field !"),
      email: yup.string().required("Email is a required field !").email("Email  number is not valid !"),
      maNhom:yup.string().required('Choose one of 10 group codes !'),
      matKhau:yup.string().required("Password is a required field !"),
      soDT: yup.string().required("Phone number is a required field !").matches(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/, 'Phone number is not valid !'),
      hoTen: yup.string().required("Name is a required field !").matches(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/, 'Name is not valid !')
    }
    ),
    onSubmit: (values:registerModel) => {
      const action =postUserRegisterApi(values);
      dispatch(action);
      console.log(values)
      // alert('Đăng ký thành công');
      
    },  
  })


  const frmConfirm = useFormik({
    initialValues: {
      xacNhanMatKhau:''
    },
    validationSchema: yup.object().shape({
      xacNhanMatKhau: yup.string()
        .oneOf([yup.ref("password")], "Password's not match")
    }
    ),
    onSubmit: (values) => {
      console.log(values)
    },  
  })




  return (
    <div className='register'>
    <form className='container' onSubmit={frm.handleSubmit}>
      <img src="./img/logo1.png" alt="..." /> 
      <div className='form'>
        <h2>Đăng Ký</h2>
        <div className='form-body'>
          <p>Account </p>
          <input type="text" id='taiKhoan' placeholder='Input account' className='form-control' onChange={frm.handleChange} onBlur={frm.handleBlur} />
          {frm.errors.taiKhoan ? <p className='text-danger'>{frm.errors.taiKhoan}</p>:''}
          {/* <br /> */}
          <p>Password</p>
          <input type="text" id='matKhau' placeholder='Input password' className='form-control' onChange={frm.handleChange} onBlur={frm.handleBlur}/>
          {frm.errors.matKhau  ? <p className='text-danger'>{frm.errors.matKhau}</p>:''}
          {/* <br /> */}
          <p>Confirm Password</p>
            <input type="text" id='xacNhanMatKhau' className='form-control' placeholder='Confirm password' onChange={frmConfirm.handleChange} onBlur={frmConfirm.handleBlur} />
             {frmConfirm.values.xacNhanMatKhau!==frm.values.matKhau ? <p className='text-danger'>{frmConfirm.errors.xacNhanMatKhau}</p>:''}
          {/* <br /> */}
          <p>Name</p>
          <input type="text" id='hoTen' placeholder='Input name' className='form-control'onChange={frm.handleChange} onBlur={frm.handleBlur} />
          {frm.errors.hoTen ? <p className='text-danger'>{frm.errors.hoTen}</p>:''}
          {/* <br /> */}
          <p>Phone Number</p>
          <input type="text" id='soDT' placeholder='Input phone number'className='form-control' onChange={frm.handleChange} onBlur={frm.handleBlur}/>
          {frm.errors.soDT ? <p className='text-danger'>{frm.errors.soDT}</p>:''}
          {/* <br /> */}
          <p>Group code</p>
          <select name="" id="maNhom"  onChange={frm.handleChange} onBlur={frm.handleBlur}>
          <option value="" ></option>
          <option value="GP01">GP01</option>
          <option value="GP02">GP02</option>
          <option value="GP03">GP03</option>
          <option value="GP04">GP04</option>
          <option value="GP05">GP05</option>
          <option value="GP06">GP06</option>
          <option value="GP07">GP07</option>
          <option value="GP08">GP08</option>
          <option value="GP09">GP09</option>
          <option value="GP10">GP10</option>
          </select>
          {frm.errors.maNhom ? <p className='text-danger'>{frm.errors.maNhom}</p>: ''}
          {/* <br /> */}
          {/* <br /> */}
          <p>Email</p>
          <input type="text" id='email' placeholder='Input email' className='form-control'onChange={frm.handleChange} onBlur={frm.handleBlur}/>
          {frm.errors.email? <p className='text-danger'>{frm.errors.email}</p>:''}
        
        </div>
        <div style={{textAlign:'right',
      marginRight:'20px'
      }}>
        <NavLink to={'/login'} style={{textDecoration:'',
            fontSize:'19px',
            fontWeight:400,
            textAlign:'center'
      }}>Đăng nhâp </NavLink>
        </div>
        <div className='form-footer'>
          <button className='btn btn-success' onClick={()=>{
            frm.handleSubmit()
          }}>Đăng nhập</button>
        </div>
      </div>
    </form>
    </div>
  )
}