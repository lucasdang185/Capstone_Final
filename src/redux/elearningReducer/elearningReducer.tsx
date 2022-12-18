import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { type } from '@testing-library/user-event/dist/type';
import axios from 'axios';
import { http } from '../../util/cofig';
import { DispatchType } from '../configStore';

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

export type elearningState={
    arrCourse:CourseModel[];
}

const initialState:elearningState = {
    arrCourse:[
        {
            "maKhoaHoc": "123",
            "biDanh": "node-js",
            "tenKhoaHoc": "Node js",
            "moTa": "mo ta tu duy lap trinh",
            "luotXem": 100,
            "hinhAnh": "https://elearningnew.cybersoft.edu.vn/hinhanh/node-js_gp01.png",
            "maNhom": "gp01",
            "ngayTao": "05/12/2022",
            "soLuongHocVien": 0,
            "nguoiTao": {
              "taiKhoan": "1234561",
              "hoTen": "Bá Thục",
              "maLoaiNguoiDung": "GV",
              "tenLoaiNguoiDung": "Giáo vụ"
            },
            "danhMucKhoaHoc": {
              "maDanhMucKhoahoc": "Design",
              "tenDanhMucKhoaHoc": "Thiết kế Web"
            }
          }
    ]
}

const elearningReducer = createSlice({
  name: "elearningReducer",
  initialState,
  reducers: {
    getCourseAction:(state:elearningState,action:PayloadAction<CourseModel[]>)=>{
        state.arrCourse=action.payload;
    }
  }
});

export const {getCourseAction} = elearningReducer.actions

export default elearningReducer.reducer




export const getCourseApi=()=>{
    return async (dispatch:DispatchType)=>{
       const result=await http.get('/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc');
        const content:CourseModel[]=result.data;
        const action:PayloadAction<CourseModel[]>=getCourseAction(content)
        dispatch(action);
    }
}