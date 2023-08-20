import React, { useState } from "react";
import "./MenuComponent.css";
import Ansim from "./images/Ansim.svg";
import Deungsim from "./images/Deungsim.svg";
import Curry from "./images/Curry.svg";
import Cheese from "./images/Cheese.svg";
import Gochidon from "./images/Gochidon.svg";
import Soba from "./images/Soba.svg";
import Udon from "./images/Udon.svg";

const MenuComponent = () => {
  const [menuItems, setMenuItems] = useState([
    { id: 1, image:Ansim, name: "안심 카츠", price: 9000 },
    { id: 2, image:Deungsim, name: "등심 카츠", price: 10000 },
    { id: 3, image:Curry, name: "카레카츠", price: 11000 },
    { id: 4, image:Cheese, name: "치즈카츠", price: 11000 },
    { id: 5, image:Gochidon, name: "고구마치즈카츠", price: 12000 },
    { id: 6, image:Soba, name: "소바", price: 7000 },
    { id: 7, image:Udon, name: "우동", price: 7000 },
  ]);

  return (
    <div className="MenuContainer">
      <h2>메뉴</h2>
      <ul className="menu-list">
      {menuItems.map((item) => (
          <li key={item.id} className="menu-item">
            <div className="item-image">
              <img src={item.image} style={{width:"123px", borderRadius:"10px"}} />
            </div>
            <span className="item-name" style={{fontSize:"15px"}}>{item.name}</span><br/>
            <span className="item-price">{item.price}원</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuComponent;
