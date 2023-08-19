import React from "react";
import "./Shop.css";
import food1 from "../../assets/image/Shop/food1.svg";
import clock from "../../assets/image/Shop/clock.svg";
import nft1 from "../../assets/image/Main/nft1.svg";

const Shop = () => {
  return (
    <div className="Shop">
        <div className="Top">
        <img src={food1} style={{ width: "370px", display: "block", margin: "0 auto" }} className="food" alt="Food" />
        </div>
        <h1 className="shopName">이세 돈까스<br/>
          <span className="shopIntro">서울특별시 성북구 개운사길 32</span><br/>
          <img src={clock} style={{width:"11.25px", height:"13.13px"}}></img>
          <span className="running">&nbsp;영업중&nbsp;&nbsp;
            <span className="closeTime">&nbsp;&nbsp;20:00에 영업종료</span>
          </span>
          
        </h1>

      <div className="Line">
        <img src={nft1} style={{ width: "95px" }} alt="NFT" />
      </div>
    </div>

  
  );
};

export default Shop;
