import React, { useState } from "react";
import "./Review.css";
import User1 from "./images/user1.svg";
import User2 from "./images/user2.svg";
import User3 from "./images/user3.svg";

const Review = () => {
  const [reviews, setReviews] = useState([
    { id: 1, content: "역시 이세 돈가스! 튀김옷의 바삭함이 이 세상 바삭함이 아니네요. 그리고 카레돈가스도 진짜 미쳤습니다!!!!!", rating: 5, image: User1, foodImages: ["images/Review/curry.svg", "images/Review/soba.svg"] },
    { id: 2, content: "숭실대생인데 항상 돈가스 먹으러 여기 옵니다. 이세돈가스 더 이상 유명해지지 않았으면..웨이팅이 점점 늘어니서 슬퍼요..ㅠㅠ", rating: 4, image: User2, foodImages: ["images/Review/Deungsim.svg", "images/Review/Ansim.svg"] },
    { id: 3, content: "이세 돈가스는 우동과 함께 먹어야 진리입니다. 고구마치즈카츠 처음 주문해봤는데 왜 항상 품절인지 한입 먹는 순간 깨달았어요. 사장님 일 적게 하고 돈 많이 버세요~!!", rating: 4, image: User3, foodImages: ["images/Review/udon.svg", "images/Review/Gochidon.svg"] }
    // ... 다른 리뷰 항목들 추가
  ]);

  return (
    <div className="ReviewContainer">
      <h2>리뷰 <span style={{fontSize:"11px", color:"#8C8C8C"}}> 127건</span></h2>
      <ul className="review-list">
        {reviews.map((review) => (
          <li key={review.id} className="review-item">
            <div className="review-header">
              <img src={review.image} alt="User" className="user-image" style={{width:"55px"}}/>
              <p className="review-content">{review.content}</p>
            </div>
            <div className="food-images">
              {review.foodImages.map((foodImage, index) => (
                <img
                  key={index}
                  src={foodImage}
                  className="food-image"
                  style={{ width: "120px", height:"120px", padding:"5px", borderRadius:"10px" }}
                />
              ))}
            </div>
            <p className="review-rating">별점: {review.rating}점</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Review;
