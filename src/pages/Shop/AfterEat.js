import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import nft from "../../assets/image/Main/nft1.svg";


const AfterEat = () => {
  return (
    <AfterEatCon>
      <img src={nft} style={{ width: "200px", marginTop: "150px" }} alt="NFT" />
      <Gotoreview style={{ color: "#EB4F27", paddingTop: "77px" }}>이세 돈까스</Gotoreview>
      <Gotoreview>맛있게 드셨나요?</Gotoreview>
      <Gotoreview style={{ paddingBottom: "56px" }}>리뷰를 작성해주세요</Gotoreview>

      <ReviewBtn to="/review/create" className="ReviewBtn">
        리뷰 작성 바로가기 ➤
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

export default AfterEat;
