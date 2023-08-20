import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import nft from "../../assets/image/Main/nft1.svg";


const AfterReview = () => {
  return (
    <AfterEatCon>
      <img src={nft} style={{ width: "200px", marginTop: "150px" }} alt="NFT" />
      <Gotoreview style={{ color: "#EB4F27", paddingTop: "77px" }}>호돌이의 상영님,</Gotoreview>
      <Gotoreview>포인트&nbsp; <span style={{color: "#EB4F27"}}>+10점</span>이 적립되었습니다. </Gotoreview>
        <br/>
      <ReviewBtn to="/UserPage" className="ReviewBtn">
        포인트 확인하기 &nbsp;➤
      </ReviewBtn>
    </AfterEatCon>
  );
};

const AfterEatCon = styled.div`
  background: linear-gradient(to bottom, #FFB340, #F6F6F6, #F6F6F6, #F6F6F6);
  background-size: cover;
  width: 393px;
  height: 860px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  font-family: "Noto Sans KR";
`;

const Gotoreview = styled.h1`
  text-align: center;
  font-size: 22px;
  font-style: normal;
  font-weight: 800;
  line-height: 100%;
`;

const ReviewBtn = styled(Link)`
  width: 196px;
  height: 37px;
  border-radius: 999px;
  background: #EB4F27;
  text-align: center;
  color: #FFF;
  text-decoration: none;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default AfterReview;
