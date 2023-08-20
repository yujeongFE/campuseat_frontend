import React, { useState } from "react";
import "./Main.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import Modal from "../../components/Modal/Modal";

import nft4 from "../../assets/image/Main/nft4.svg";
import Qrcode from "../../assets/image/Main/qrcode.svg";

const Main = () => {
  const [selectedImage, setSelectedImage] = useState(`${nft4}`);
  const [isOpen, setIsOpen] = useState(false);

  //NFT 관련
  const handleSlideClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  //모달관련
  const handleImageClick = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  //NFT로 변경!!
  const slideImages = [
    "nft1.svg",
    "nft2.svg",
    "nft3.svg",
    "nft4.svg",
    "nft5.svg",
    "nft6.svg",
  ];

  const modalContent = (
    <div>
      <img src={selectedImage} className="modal-nft" alt="NFT"></img>
      <div className="additional-content">
        <h2>추가 내용 제목</h2>
        <p>이미지에 관한 추가 설명이나 내용을 여기에 작성하세요.</p>
      </div>
    </div>
  );

  return (
    <div className="MainPage">
      <img
        src={selectedImage}
        className="nft"
        onClick={handleImageClick} // 이미지 클릭 시 모달 열기
      ></img>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
        cardsEffect={{
          perSlideOffset: 40,
          perSlideRotate: 10,
          rotate: true,
          slideShadows: false,
        }}
      >
        {slideImages.map((imageUrl, index) => (
          <SwiperSlide
            key={index}
            onClick={() => handleSlideClick(`images/Main/${imageUrl}`)}
          >
            <img src={`images/Main/${imageUrl}`} className="nftImage"></img>
          </SwiperSlide>
        ))}
      </Swiper>
      {isOpen && (
        <Modal closeModal={() => handleCloseModal(setIsOpen)} color="#E8E1E1">
          <img
            style={{ width: 281, height: 399 }}
            src={selectedImage}
            className="modal-nft"
            alt="NFT"
          ></img>
          <img style={{ width: 100, height: 100 }} src={`${Qrcode}`} />
        </Modal>
      )}
    </div>
  );
};

export default Main;
