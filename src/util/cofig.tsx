import axios from "axios"
import {createBrowserHistory} from 'history'
import { history } from "../index";
export const  TOKEN_CYBERSOFT='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzMyIsIkhldEhhblN0cmluZyI6IjExLzA0LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY4MTE3MTIwMDAwMCIsIm5iZiI6MTY1Mjg5MzIwMCwiZXhwIjoxNjgxMzE4ODAwfQ.j4z4TCOvHfc7Iq372RxnnLGogFR3Yf1bukUxTce5WTc';
export const USER_LOGIN='userLogin'; 
export const USER_REGISER='userRegister';
export const ACCESS_TOKEN='accessToken';   
// export const history =createBrowserHistory();


export const http = axios.create({
    baseURL: 'https://elearningnew.cybersoft.edu.vn',
    timeout: 30000
})


export const settings = {
    setStorageJson: (name:string, data:any):void => {
        data = JSON.stringify(data);
        localStorage.setItem(name, data);   
    },
    setStorage: (name:string, data:any):void => {
        localStorage.setItem(name, data)
    },
    getStorageJson: (name:string):any|undefined => {
        if (localStorage.getItem(name)) {
            const dataStore:string|undefined|null=localStorage.getItem(name);
            if(typeof dataStore ==='string'){
                const data=JSON.parse(dataStore);
            return data;
            }
            return undefined
        }
        return 
    },
    // getStore: (name) => {
    //     return localStorage.getItem(name);
    //   },
    getStorage: (name:string):string|null|undefined => {
        if (localStorage.getItem(name)) {
            const data:string|null|undefined = (localStorage.getItem(name))
            return data
        }
        return null;//undefined
    },
    setCookieJson:(name:string,value:any,days:number):void=>{   
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days*24*60*60*1000));
            expires = "; expires=" + date.toUTCString();
        }
        value=JSON.stringify(value)
        document.cookie = name + "=" + (value || "")  + expires + "; path=/";
    },
     setCookie:(name:string,value:any,days:number):void=> {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days*24*60*60*1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "")  + expires + "; path=/";
    },
    getCookieLJson:(name:string):any=> {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    },
    getCookieL:(name:string):string|null=> {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) 
            return JSON.parse( c.substring(nameEQ.length,c.length));
        }
        return null;
    },
    eraseCookie:(name:string):void=> {   
        document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    },
}


http.interceptors.request.use((config) => {
    config.headers = {
        ...config.headers,
        TokenCyberSoft: TOKEN_CYBERSOFT,
    }
    return config;


}, err => {
    console.log(err)
    return Promise.reject(err);
})


//sever sẽ trả về dữ liệu cho client

http.interceptors.response.use((response)=>{
    return response;

},  (err)=>{
    console.log(err.response)
    // if(err.response.status===''){
    //     alert("Đăng ký thành công")
    // }
    if(err.response.data==='Email đã tồn tại!'){
        alert('Email đã tồn tại')
    }   
    // else if(err.response.data)
}
)
