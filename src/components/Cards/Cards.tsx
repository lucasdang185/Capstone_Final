import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { RootState } from "../../redux/configStore";
import { CourseModel } from "../../redux/elearningReducer/elearningReducer";
type Props = {};

export default function Cards({}: Props) {
  const { arrCourse } = useSelector(
    (state: RootState) => state.elearningReducer
  );
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
              <NavLink to={"./register"}>
                <button>Đăng ký</button>
              </NavLink>
            </div>
          </div>
        );
      })}
    </div>
  );
}
