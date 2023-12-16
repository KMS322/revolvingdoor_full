import "../../css/infoDetail.css";
import "../../css/infoDetail_mobile.css";
import dayjs from "dayjs";
const InfoDetailS1 = (props) => {
  const { data } = props;
  return (
    <div className="info_detail_s1">
      <div className="title_box">
        <div className="title">
          <img src="/images/info_detail_s1_img.png" alt="" />
          <p>회계전문인임시직매칭정보</p>
        </div>
      </div>
      <div className="article_container">
        <div className="img_box">
          {/* <img src="/images/info_detail_s2_img1.jpg" /> */}
        </div>
        <div className="text_box">
          <p>{data.resume.title}</p>
          <p>{dayjs(data.resume.updatedAt).format("YYYY-MM-DD")}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoDetailS1;
