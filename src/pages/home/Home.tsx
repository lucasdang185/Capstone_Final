import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../../components/Cards/Cards";
import { DispatchType, RootState } from "../../redux/configStore";
import { getCourseApi } from "../../redux/elearningReducer/elearningReducer";

type Props = {};
export default function Home({}: Props) {
  const { arrCourse } = useSelector(
    (state: RootState) => state.elearningReducer
  );
  console.log(arrCourse);

  const getAllCrouse = () => {
    const action = getCourseApi();
    dispatch(action);
  };

  

  const dispatch: DispatchType = useDispatch();
  useEffect(() => {
    getAllCrouse();
  }, []);
  return (
    <div>
      <div className="slider">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
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
                <div className="overlay"></div>
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

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span aria-hidden="true">
              <i
                className="fa-solid fa-caret-left"
                style={{ fontSize: 80, color: "#cbc9c9", marginRight: 150 }}
              />
            </span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span aria-hidden="true">
              <i
                className="fa-solid fa-caret-right "
                style={{ fontSize: 80, color: "#cbc9c9", marginLeft: 150 }}
              />
            </span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="introduce container">
        <div className="row ">
          <div className="intro-l">
            <h2>Đào tạo nghề lập trình chuyên sâu từ ZERO</h2>
            <p>
              CyberSoft khai thác nhu cầu tuyển dụng lập trình, kết nối việc làm
              tới doanh nghiệp và tích hợp các dự án với công nghệ mới nhất vào
              phương pháp đào tạo tích cực cho các học viên học xong có việc làm
              ngay. Chương trình giảng dạy được biên soạn may đo dành riêng cho
              các bạn Lập trình từ trái ngành hoặc đã có kiến thức theo cường độ
              cao, luôn được tinh chỉnh và tối ưu hóa theo thời gian bởi các
              thành viên sáng lập và giảng viên dày kinh nghiệm.
            </p>
            <button className="btn btn-success">Danh sách khóa học</button>
          </div>
          <div className="intro-r">
            <img src="./img/introduce.jpg" alt="introduce" />
          </div>
        </div>
      </div>
      <div className="container">
        <h1>Khóa học mới nhất</h1>
        <Cards />
      </div>
    </div>
  );
}
