import React, { useState } from "react";
import "./MenuComponent.css";
import Ansim from "./images/Ansim.svg";
import Deungsim from "./images/Deungsim.svg";
import Curry from "./images/Curry.svg";
import Cheese from "./images/Cheese.svg";
import Gochidon from "./images/Gochidon.svg";
import Dupbab from "./images/Dupbab.svg";

const MenuComponent = () => {
  const [menuItems, setMenuItems] = useState([
    { id: 1, image:Ansim, name: "안심 카츠", price: 10000 },
    { id: 2, image:Deungsim, name: "등심 카츠", price: 15000 },
    { id: 3, image:Curry, name: "카레카츠", price: 18000 },
    { id: 4, image:Cheese, name: "치즈카츠", price: 10000 },
    { id: 5, image:Gochidon, name: "고구마치즈카츠", price: 10000 },
    { id: 6, image:Dupbab, name: "가츠동", price: 10000 },
    { id: 7, image:"../../assets/image/Login/hamburger.svg", name: "모밀 + 등심돈가스", price: 10000 },
    // ... 다른 메뉴 항목들 추가
  ]);

  return (
    <div className="MenuContainer">
      <h2>메뉴</h2>
      <ul className="menu-list">
      {menuItems.map((item) => (
          <li key={item.id} className="menu-item">
            <div className="item-image">
              <img src={item.image} style={{width:"123px"}} />
            </div>
            <span className="item-name">{item.name}</span><br/>
            <span className="item-price">{item.price}원</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuComponent;
