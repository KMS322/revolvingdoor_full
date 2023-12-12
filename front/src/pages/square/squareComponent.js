import Banner from "../banner";
import "../../css/square.css";
import "../../css/square_mobile.css";
import Nav from "../nav";

const SquareComponents = () => {
  return (
    <>
      <Nav />
      <Banner />
      <div className="square_s1">
        <div className="title_box">
          <div className="title">
            <img src="/images/square_s1_img1.png" alt="" />
            <p>일자리광장</p>
          </div>
        </div>
        <div className="article_container">
          <div className="article">
            <p># 여성 일자리는 00과 함께</p>
            <div className="row_container">
              <div className="row_box">
                <div className="row">
                  <img src="/images/square_s1_img2.png" alt="" />
                  <p>서울 우먼업</p>
                  <p>#서울 #여성</p>
                </div>
                <div className="row">
                  <img src="/images/square_s1_img3.png" alt="" />
                  <p>한국여성벤처협회</p>
                  <p>#한국 #여성 #벤처</p>
                </div>
                <div className="row">
                  <img src="/images/square_s1_img4.png" alt="" />
                  <p>여성새로일하기센터</p>
                  <p>#여성 #재취업</p>
                </div>
              </div>
              <div className="row_box">
                <div className="row">
                  <img src="/images/square_s1_img2.png" alt="" />
                  <p>서울 우먼업</p>
                  <p>#서울 #여성</p>
                </div>
                <div className="row">
                  <img src="/images/square_s1_img3.png" alt="" />
                  <p>한국여성벤처협회</p>
                  <p>#한국 #여성 #벤처</p>
                </div>
                <div className="row">
                  <img src="/images/square_s1_img4.png" alt="" />
                  <p>여성새로일하기센터</p>
                  <p>#여성 #재취업</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SquareComponents;
