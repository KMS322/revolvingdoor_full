import "../css/showUserDetail.css";
import React, { useRef } from "react";
const ShowUserDetail = ({ data, onClose }) => {
  console.log("data : ", data);
  const printRef = useRef(null);
  // const handlePrint = () => {
  //   if (printRef.current) {
  //     const content = printRef.current.innerHTML;
  //     const printWindow = window.open("", "_blank");
  //     printWindow.document.open();
  //     printWindow.document.write(`
  //       <html>
  //         <head>
  //           <title>사용자 상세 정보</title>
  //           <style>
  //             @media print {
  //               /* 프린트할 대상 컴포넌트의 스타일을 지정합니다. */
  //               /* 예: .showUserDetail { background: white; } */
  //             }
  //           </style>
  //         </head>
  //         <body>
  //           ${content}
  //         </body>
  //       </html>
  //     `);
  //     printWindow.document.close();
  //     printWindow.print();
  //     printWindow.close();
  //   }
  // };
  return (
    <div className="showUserDetail" ref={printRef}>
      <img src="/images/close_btn.png" alt="" onClick={onClose} />
      {/* <img
        className="print_btn"
        src="/images/close_btn.png"
        alt=""
        onClick={handlePrint}
      /> */}
      <div className="article_container">
        <p>{data.UserIndividual.user_member_name}님의 상세정보 입니다.</p>
        <p className="title">회원 정보</p>
        <div className="text_box">
          <p>생년월일</p>
          <p>{data.UserIndividual.user_member_num}</p>
        </div>
        <div className="text_box">
          <p>주소</p>
          <p>{`${data.UserIndividual.user_member_jibunAddress} ${
            data.UserIndividual.user_member_detailAddress
              ? data.UserIndividual.user_member_detailAddress
              : ""
          }`}</p>
        </div>
        <div className="text_box">
          <p>휴대전화</p>
          <p>{data.UserIndividual.user_member_tel}</p>
        </div>
        <div className="text_box">
          <p>이메일</p>
          <p>{data.UserIndividual.user_member_email}</p>
        </div>
        <p className="title">이력서 정보</p>
        <div className="text_box">
          <p>이력서 제목</p>
          <p>{data.UserResumes[0].user_resume_title}</p>
        </div>
        <div className="text_box">
          <p>최종학교명</p>
          <p>{data.UserResumes[0].user_resume_school}</p>
        </div>
        <div className="text_box">
          <p>전공</p>
          <p>{data.UserResumes[0].user_resume_schoolMajor}</p>
        </div>
        <div className="text_box">
          <p>재학기간</p>
          <p>{`${data.UserResumes[0].user_resume_schoolPeriod1Year}년 ~ ${data.UserResumes[0].user_resume_schoolPeriod1Month}월 ~ ${data.UserResumes[0].user_resume_schoolPeriod2Year}년 ~ ${data.UserResumes[0].user_resume_schoolPeriod2Month}월`}</p>
        </div>
        <div className="text_box">
          <p>최종학력</p>
          <p>{data.UserResumes[0].user_resume_schoolFinal}</p>
        </div>
        <div className="text_box">
          <p>희망근무처</p>
          <p>{data.UserResumes[0].user_resume_hopeCompany}</p>
        </div>

        {data.UserResumes[0].user_resume_hopeRegion ? (
          <div className="text_box">
            <p>근무지역</p>
            <p>{data.UserResumes[0].user_resume_hopeRegion2}</p>
          </div>
        ) : (
          <>
            <div className="text_box">
              <p>근무지역 1순위</p>
              <p>{data.UserResumes[0].user_resume_hopeRegion1}</p>
            </div>
            <div className="text_box">
              <p>근무지역 2순위</p>
              <p>{data.UserResumes[0].user_resume_hopeRegion2}</p>
            </div>
          </>
        )}

        {data.UserResumes[0].user_resume_hopePayType2 ? (
          <div className="text_box">
            <p>희망임금</p>
            <p>{data.UserResumes[0].user_resume_hopePayType2}</p>
          </div>
        ) : (
          <>
            <div className="text_box">
              <p>희망임금 형태</p>
              <p>{data.UserResumes[0].user_resume_hopePayType1}</p>
            </div>
            <div className="text_box">
              <p>희망임금 금액</p>
              <p>{data.UserResumes[0].user_resume_hopePay}</p>
            </div>
          </>
        )}
        <div className="text_box">
          <p>고용형태</p>
          <p>{`${data.UserResumes[0].user_resume_hopeWork1 ? "출근근무" : ""} ${
            data.UserResumes[0].user_resume_hopeWork2 ? "탄력근무" : ""
          } ${data.UserResumes[0].user_resume_hopeWork3 ? "재택근무" : ""} ${
            data.UserResumes[0].user_resume_hopeWork4 ? "모두가능" : ""
          }`}</p>
        </div>
        <div className="text_box">
          <p>취업희망 시기</p>
          <p>{`${data.UserResumes[0].user_resume_hopeStartYear}년 ${data.UserResumes[0].user_resume_hopeStartMonth}월 ${data.UserResumes[0].user_resume_hopeStartDay}일`}</p>
        </div>
        <div className="text_box">
          <p>근무 가능 시간</p>
          <p>{`${data.UserResumes[0].user_resume_hopeWorkTime1Hour} : ${data.UserResumes[0].user_resume_hopeWorkTime1Hour} ~ ${data.UserResumes[0].user_resume_hopeWorkTime2Hour} : ${data.UserResumes[0].user_resume_hopeWorkTime2Minute}`}</p>
        </div>
        <p className="title">경력 정보</p>
        <div className="text_box">
          <p>근무처</p>
          <p>{data.UserCareer?.user_career_company1}</p>
        </div>
        <div className="text_box">
          <p>직위</p>
          <p>{data.UserCareer?.user_career_position1}</p>
        </div>
        <div className="text_box">
          <p>담당 사업장 형태</p>
          <p>{data.UserCareer?.user_career_companyState1}</p>
        </div>
        <div className="text_box">
          <p>사용 프로그램</p>
          <p>{data.UserCareer?.user_career_program1}</p>
        </div>
        <div className="text_box">
          <p>근무기간</p>
          <p>{`${data.UserCareer?.user_career_period11Year}년 ${data.UserCareer?.user_career_period11Month}월 ~ ${data.UserCareer?.user_career_period12Year}년 ${data.UserCareer?.user_career_period11Month}월`}</p>
        </div>
        <div className="text_box">
          <p>자격명</p>
          <p>{data.UserCareer?.user_career_license1}</p>
        </div>
        <div className="text_box">
          <p>취득일</p>
          <p>{`${data.UserCareer?.user_career_license1Year}년 ${data.UserCareer?.user_career_license1Month}월 ${data.UserCareer?.user_career_license1Day}일`}</p>
        </div>
        <div className="text_box">
          <p>발급기관</p>
          <p>{data.UserCareer?.user_career_license1Organization}</p>
        </div>
        <div className="text_box">
          <p>훈련 과정명</p>
          <p>{data.UserCareer?.user_career_trainingName1}</p>
        </div>
        <div className="text_box">
          <p>훈련기간</p>
          <p>{`${data.UserCareer?.user_career_trainingPeriod11Year}년 ${data.UserCareer?.user_career_trainingPeriod11Month}월 ~ ${data.UserCareer?.user_career_trainingPeriod12Year}년 ${data.UserCareer?.user_career_trainingPeriod12Month}월`}</p>
        </div>
        <div className="text_box">
          <p>세부 훈련 내용</p>
          <p>{data.UserCareer?.user_career_trainingDetail1}</p>
        </div>
        <div className="text_box">
          <p>훈련 기관명</p>
          <p>{data.UserCareer?.user_career_trainingOrganization}</p>
        </div>
        <div className="text_box">
          <p>최종이직시기</p>
          <p>{`${data.UserCareer?.user_career_changeYear}년 ${data.UserCareer?.user_career_changeMonth}월`}</p>
        </div>
        <div className="text_box">
          <p>이직사유</p>
          <p>{data.UserCareer?.user_career_changeReason}</p>
        </div>
        <div className="text_box">
          <p>회계지식</p>
          <p>{data.UserCareer?.user_career_knowCount}</p>
        </div>
        <div className="text_box">
          <p>세무(법)지식</p>
          <p>{data.UserCareer?.user_career_knowTax}</p>
        </div>
        <div className="text_box">
          <p>전산활용능력</p>
          <p>
            {data.UserCareer?.user_career_abilityProcess1 ? "문서 작성 " : ""}
            {data.UserCareer?.user_career_abilityProcess2
              ? "스프레드시트 "
              : ""}
            {data.UserCareer?.user_career_abilityProcess3
              ? "프레젠테이션 "
              : ""}
            {data.UserCareer?.user_career_abilityProcess4
              ? "회계프로그램 "
              : ""}
            {data.UserCareer?.user_career_abilityProcess5
              ? data.UserCareer?.user_career_abilityProcess6
              : ""}
          </p>
        </div>
        <div className="text_box">
          <p>운전능력</p>
          <p>
            {data.UserCareer?.user_career_abilityDrive1 ? "운전면허증 " : ""}
            {data.UserCareer?.user_career_abilityDrive2 ? "차량소지자 " : ""}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShowUserDetail;
