import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { RootState } from '../../redux/configStore';

export  type DanhMucModel={
    maDanhMuc:string;
    maNhom:string;
}
type Props = {}

export default function CourseList({}: Props) {

  let {arrCourseList,arrKhoaHoc}=useSelector((state:RootState)=>state.elearningReducer)
  // console.log(arrKhoaHoc);

  // console.log(arrCourseList[0]?.maDanhMuc) 
  // console.log(a)
  // console.log(arrKhoaHoc); 
  const renderDanhMuc=()=>{
    return <>
     {arrKhoaHoc.map((course: any, index: number) => {
        return (
          <div className="col-3" key={index}>
            <div className="card">
              <img src={course.hinhAnh} alt="" />
              <div className="card-body">
                <h5>{course.tenKhoaHoc}</h5>  
                <i className="fa-solid fa-star"></i>
              </div>
              <button className="btn" >
                <NavLink to={`/detail/${course.maKhoaHoc}`}>Buy now</NavLink>
              </button>
            </div>
          </div>
        );
      })}</>
  }

  const renderH2=()=>{
    if(arrKhoaHoc.length!==0){
      return <h2>{arrKhoaHoc[0].danhMucKhoaHoc.tenDanhMucKhoaHoc}</h2>
    }
    else
    return <></>

  }

  useEffect(() => {
   renderDanhMuc()
  }, [arrCourseList]);


  return (
    <div className='courseList'>
      <div className='carousel'>
      </div>
        <div className='container'>
          {renderH2()}
        {/* <div className='menu'>
          <div className='backend item'>
            <p>Back end</p>
          </div>
          <div className='frontEnd item'>
            <p>Front end</p>
          </div>
          <div className='tuDuy item'>
            <p>Tư duy lập trình</p>
          </div>
          <div className='web item'>
            <p>Thiết kế web</p>
          </div>
          <div className='diDong item'>
            <p>Lập trình di dộng</p>
          </div> */}

          <div className='List'>
          <div className="row">
          {renderDanhMuc()}
    </div>
          </div>
        </div>
        </div>
    
  )
}


