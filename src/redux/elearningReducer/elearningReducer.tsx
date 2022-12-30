import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { type } from '@testing-library/user-event/dist/type';
import axios from 'axios';
import { danhMucModel } from '../../components/Header';
// import { danhMucModel } from '../../components/Header';
import { http } from '../../util/cofig';
import { DispatchType } from '../configStore';
//renden trang home
export type CourseModel={
    maKhoaHoc:      string;
    biDanh:         string;
    tenKhoaHoc:     string;
    moTa:           string;
    luotXem:        number;
    hinhAnh:        string;
    maNhom:         string;
    ngayTao:        string;
    soLuongHocVien: number;
    nguoiTao:       NguoiTAO;
    danhMucKhoaHoc: DanhMucKhoaHoc;
}
export type DanhMucKhoaHoc= {
    maDanhMucKhoahoc:  string;
    tenDanhMucKhoaHoc: string;
}
export type NguoiTAO ={
    taiKhoan:         string;
    hoTen:            string;
    maLoaiNguoiDung:  string;
    tenLoaiNguoiDung: string;
}


//trang danh muc khoa hoc
export interface DanhMucKhoaHocResult{
    tenDanhMuc:String;
    maDanhMuc:string;
}

export type khoaHocResult ={
  maKhoaHoc:      string;
  biDanh:         string;
  tenKhoaHoc:     string;
  moTa:           string;
  luotXem:        number;
  hinhAnh:        string;
  maNhom:         string;
  ngayTao:        string;
  soLuongHocVien: number;
  nguoiTao:       NguoiTAO;
  danhMucKhoaHoc: DanhMucKhoaHoc;
}


export type elearningState={
    arrCourse:CourseModel[],
    arrCourseList:DanhMucKhoaHocResult[],
    arrKhoaHoc:khoaHocResult[]
}


const initialState:elearningState = {
    arrCourse:[],
    arrCourseList:[],
    arrKhoaHoc:[]
}

const elearningReducer = createSlice({
  name: "elearningReducer",
  initialState,
  reducers: {
    getCourseAction:(state:elearningState,action:PayloadAction<CourseModel[]>)=>{
        state.arrCourse=action.payload;
    },
    getCourseListAction:(state:elearningState,action:PayloadAction<DanhMucKhoaHocResult[]>)=>{
      state.arrCourseList=action.payload;
      // console.log(state.arrCourseList.maDanhMuc)
    },
    getKhoaHocAction:(state:elearningState,action:PayloadAction<khoaHocResult[]>)=>{
      state.arrKhoaHoc=action.payload
      // console.log(state.arrKhoaHoc)
    }
  }
});

export const {getCourseAction,getCourseListAction,getKhoaHocAction} = elearningReducer.actions

export default elearningReducer.reducer




export const getCourseApi=()=>{
    return async (dispatch:DispatchType)=>{
       const result=await http.get('/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc');
        const content:CourseModel[]=result.data;
        const action:PayloadAction<CourseModel[]>=getCourseAction(content)
        dispatch(action);
    }
}

export const getCourseListApi=(tenDanhMuc:string):any=>{
    return async (dispatch:DispatchType)=>{
      try {
        const result=await http.get('/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc?tenDanhMuc='+tenDanhMuc);
        if(result){
          const content:DanhMucKhoaHocResult[]=result.data;
          const action:PayloadAction< DanhMucKhoaHocResult[]>=getCourseListAction(content);
          dispatch(action);
        }
      }
      catch (error) {
       console.log(error) 
      }
    }
}
//danh muc
export const getKhoaHocApi=(maDanhMuc:string):any=>{
  return async (dispatch:DispatchType)=>{
    try {
      const result=await http.get('/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc='+maDanhMuc+'&MaNhom=GP01');
      if(result&& result!==undefined){
      const content:khoaHocResult[]=result.data;
      const action:PayloadAction<khoaHocResult[]>=getKhoaHocAction(content)
      dispatch(action)
      }
    } catch (error) {
      console.log(error)
    }
  }
}