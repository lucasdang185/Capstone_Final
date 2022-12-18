import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cards from '../../components/Cards/Cards'
import { DispatchType, RootState } from '../../redux/configStore'
import { getCourseApi } from '../../redux/elearningReducer/elearningReducer'


type Props = {

}
export default function Home({}: Props) {
  const {arrCourse}=useSelector((state:RootState)=>state.elearningReducer)
console.log(arrCourse)

    const getAllCrouse=()=>{
    const action =getCourseApi();
    dispatch(action);
  }


const dispatch:DispatchType=useDispatch()
  useEffect(()=>{
    getAllCrouse()
  },[])
  return (
    <div>
       <div className="slider">
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="row">
            <div className="col-l">
              <div className="item">
                <h1>Bắt đầu lộ trình học của bạn</h1>
              </div>
            </div>
            <div className="col-r">
              <div className="item">
                <h3>Khởi đầu sự nghiệp của bạn</h3>
                <p>Trở thành lập trình viên chuyên nghiệp tại CyberSoft</p>
                <button>Xem khóa học</button>
                <button>Tư vấn học</button>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="row">
            <div className="col-l">
              <div className="item">
              <h1>Bắt đầu lộ trình học của bạn</h1>
              </div>
            </div>
            <div className="col-r">
              <div className="item">
              <h3>Khởi đầu sự nghiệp của bạn</h3>
                <p>Trở thành lập trình viên chuyên nghiệp tại CyberSoft</p>
                <button>Xem khóa học</button>
                <button>Tư vấn học</button>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="row">
            <div className="col-l">
              <div className="item">
              <h1>Bắt đầu lộ trình học của bạn</h1>
              </div>
            </div>
            <div className="col-r">
              <div className="item">
              <h3>Khởi đầu sự nghiệp của bạn</h3>
                <p>Trở thành lập trình viên chuyên nghiệp tại CyberSoft</p>
                <button>Xem khóa học</button>
                <button>Tư vấn học</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span aria-hidden="true">
          <i className="fa-solid fa-caret-left" style={{fontSize: 80, color: '#cbc9c9', marginRight: 150}} />
        </span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span aria-hidden="true">
          <i className="fa-solid fa-caret-right " style={{fontSize: 80, color: '#cbc9c9', marginLeft: 150}} />
        </span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  <div className='container'>
    <h1>Khóa học mới nhất</h1>
    <Cards/>
  </div>
    </div>
  )
}