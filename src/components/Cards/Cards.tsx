import React ,{useEffect}from "react";
import { useDispatch, useSelector, } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { RootState } from "../../redux/configStore";
import { CourseModel, getDetailApi } from "../../redux/elearningReducer/elearningReducer";
type Props = {};

export default function Cards({}: Props) {
  const dispatch=useDispatch()
  const { arrCourse } = useSelector(
    (state: RootState) => state.elearningReducer
  );


  // const submitMaKhoaHoc=(maKhoaHoc:string)=>{
  //     const action = getDetailApi(maKhoaHoc);
  //   dispatch(action);
  // }
  
 
  return (
    <div className="row">
      {arrCourse.map((course: CourseModel, index: number) => {
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
      })}
    </div>
  );
}
