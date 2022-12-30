import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { type } from "os";
import { history } from "../..";
import { userLoginModel } from "../../pages/login/Login";
import { registerModel } from "../../pages/register/Register";
import { ACCESS_TOKEN, http, settings, USER_LOGIN, USER_REGISER } from "../../util/cofig";
import { DispatchType } from "../configStore";

export type registerResult = {
  taiKhoan: string;
  email: string;
  soDT: string;
  maNhom: string;
  maNguoiDung:string;
  hoTen:string;
  accessToken:string;
};

export type loginResult={
  taiKhoan: string;
  matKhau: string;
  hoTen: string;
  soDT: string;
  maNhom: string;
  email: string;
}

export type UserState = {
  arrRegister: registerResult[] | undefined;
  arrLogin:loginResult|undefined;
};

const initialState: UserState = {
  arrRegister: [],
  arrLogin:settings.getStorageJson(USER_LOGIN) ? settings.getStorageJson(USER_LOGIN):{}
};

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    postRegisterAction: (
      state: UserState,
      action: PayloadAction<registerResult[]>
    ) => {
      state.arrRegister = action.payload;
    },
    postLoginAction:(state:UserState,action:PayloadAction<loginResult>)=>{
      state.arrLogin=action.payload;
    }
  },
});

export const { postRegisterAction,postLoginAction } = userReducer.actions;

export default userReducer.reducer;

export const postUserRegisterApi = (userRegister: registerModel) => {
  return async (dispatch: DispatchType) => {
    try {
      const result = await http.post(
        "/api/QuanLyNguoiDung/DangKy",
        userRegister
      );
      if (result) {
        const content: registerResult[] = result.data;
        const action: PayloadAction<registerResult[]>=
          postRegisterAction(content);
         dispatch(action);
         settings.setStorageJson(USER_REGISER,result.data)
         settings.setStorage(ACCESS_TOKEN,result.data.accessToken)
         settings.setCookie(ACCESS_TOKEN,result.data.accessToken,30);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const postUserLoginApi=(userLogin:userLoginModel)=>{
  return async (dispatch:DispatchType)=>{
    try {
      const result=await http.post('/api/QuanLyNguoiDung/DangNhap', userLogin)
      const content:loginResult=result.data;
      const action:PayloadAction<loginResult>=postLoginAction(content);
      settings.setStorageJson(USER_LOGIN,result.data)
      settings.setStorage(ACCESS_TOKEN,result.data.accessToken);
      history.push('/')
      dispatch(action);
    } catch (error) {
      console.log(error)
    }
  }
}
