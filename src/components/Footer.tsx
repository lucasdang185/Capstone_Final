import React from "react";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-top">
            <div className="col">
              <div className="item">
                <img src="./img/logo.png" alt="ELEARNING" />
              </div>
            </div>
            <div className="col">
              <div className="item">
                <h4 className="mb-4">KHÓA HỌC</h4>
                <p>Lập trình Backend</p>
                <p>Thiết kế Web</p>
                <p>Lập trình di động</p>
                <p>Lập trình Front end</p>
                <p>Lập trình Full Stack</p>
                <p>Tư duy lập trình</p>
              </div>
            </div>
            <div className="col">
              <div className="hr" />
              <div className="item">
                <h4 className="mb-4">COMMUNITY </h4>
                <p>Learners</p>
                <p>Developers</p>
                <p>Teaching Center</p>
                <p>Blog</p>
              </div>
            </div>
            <div className="col">
              <div className="hr" />
              <div className="item">
                <h4 className="mb-4">SOCIAL MEDIA</h4>
                <a className="me-2" href="#">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a className="me-2" href="#">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a className="me-2" href="#">
                  <i className="fa-brands fa-youtube"></i>
                </a>
                <a className="me-2" href="#">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p
        className="text-center"
        style={{ background: "rgb(227, 223, 223)", padding: 20 }}
      >
        @Copy 2022 Cybersoft All Rights Reserved | Deign Theme by Trương Tấn
        Khải
      </p>
    </footer>
  );
}
