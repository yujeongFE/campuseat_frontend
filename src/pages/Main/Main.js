import React, { useState } from "react";
import "./Main.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import Modal from "../../components/Modal/Modal";
import nft4 from "../../assets/image/Main/nft4.svg";
import QRCode from "qrcode.react";



const Main =() => {
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

  return (
    <div className="MainPage">
      <img
        src={selectedImage}
        className="nft"
        onClick={handleImageClick} // 이미지 클릭 시 모달 열기
      ></img>
      <Swiper
        effect={'cards'}
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
          <SwiperSlide key={index} onClick={() => handleSlideClick(`images/Main/${imageUrl}`)}>
            <img src={`images/Main/${imageUrl}`} className="nftImage"></img>
          </SwiperSlide>
        ))}
      </Swiper>
      {isOpen && (
        <Modal closeModal={() => handleCloseModal(setIsOpen)}>
        </Modal>
      )}
    </div>
  );
}

export default Main;
