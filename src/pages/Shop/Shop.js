import React, { useState } from "react";
import "./Shop.css";
import food1 from "../../assets/image/Shop/food1.svg";
import clock from "../../assets/image/Shop/clock.svg";
import nft1 from "../../assets/image/Main/nft1.svg";

import MenuComponent from "../../components/Menu/MenuComponent";

const Shop = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showReview, setShowReview] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
    setShowReview(false);
  };

  const handleReviewClick = () => {
    setShowReview(!showReview);
    setShowMenu(false);
  };

  return (
    <div className="Shop">
      <div className="Top">
        <img
          src={food1}
          style={{ width: "370px", display: "block", margin: "0 auto" }}
          className="food"
          alt="Food"
        />
      </div>
      <h1 className="shopName">
        이세 돈까스<br />
        <span className="shopIntro">서울특별시 성북구 개운사길 32</span>
        <br />
        <img
          src={clock}
          style={{ width: "11.25px", height: "13.13px" }}
          alt="Clock"
        />
        <span className="running">
          &nbsp;영업중&nbsp;&nbsp;
          <span className="closeTime">&nbsp;&nbsp;20:00에 영업종료</span>
        </span>
        <hr style={{ width: "393px", marginTop: "30px" }} />
      </h1>
      
      
      <div className="Nft">
        <img
          src={nft1}
          style={{ width: "95px", marginRight: "10px", marginTop: "-10px" }}
          alt="NFT"
        />
        <h1 className="shopIntro" style={{fontWeight:"bold"}}>
          고려대 NFT가 있어요!<br />
          <span style={{ color: "#FFAB5D" }}>10%</span> 할인된 금액으로 이용해보세요
        </h1>
      </div>

      <hr style={{ width: "393px", marginTop: "10px" }} />

      <div className="Navbar">
        <span className="NavItem" onClick={handleMenuClick}>
          메뉴
        </span>
        <span className="NavItem" onClick={handleReviewClick}>
          리뷰
        </span>
      </div>
      <hr style={{ width: "393px", marginTop: "10px" }} />

      <div className="ContentContainer">
        {showMenu && (
          <div className="Content">
            <div className="ForIntro">
              <h1 style={{ fontSize: "13px", color: "#302F2F", textAlign: "center" }}>
                안 먹어본 사람은 있어도 한 번 먹은 사람은 없는<br/>
                50년 내공의 이세 돈까스 !<br/>
                <span style={{ color: "#FF8A00" }}>생방송투데이 오늘 방송 맛집</span></h1>
            </div>
            <MenuComponent/>
          </div>
        )}
        {showReview && (
          <div className="Content">
            <div className="reviewBox">
              {/* 리뷰 */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
