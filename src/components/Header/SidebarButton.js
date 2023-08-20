import React, { useEffect, useRef, useState } from "react";
import styles from "./sidebar.module.css";
import { useNavigate } from "react-router-dom";
import { ReactComponent as HomeIconSVG } from "../../assets/homeicon.svg";
import { ReactComponent as MyPageSVG } from "../../assets/mypageicon.svg";
import { ReactComponent as MapIconSVG } from "../../assets/mapicon.svg";
import { ReactComponent as ShopIconSVG } from "../../assets/shopicon.svg";
import { ReactComponent as RankingIconSVG } from "../../assets/rankingicon.svg";
import Modal from "../Modal/Modal";
import nft4 from "../../assets/image/Main/nft4.svg";
import Qrcode from "../../assets/image/Main/qrcode.svg";

const SidebarButton = ({ width = 280, children }) => {
  const [isOpen, setOpen] = useState(false);
  const [xPosition, setX] = useState(-280);
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달의 상태 추가
  const modalImages = [
    "https://velog.velcdn.com/images/kkaerrung/post/9f656ffd-696c-4500-9f72-87603911b3b9/image.png",
  ];
  const side = useRef();
  const navigate = useNavigate();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // button 클릭 시 토글
  const toggleMenu = () => {
    if (xPosition === -280) {
      // 버튼이 처음 위치에 있을 때 클릭하면 토글이 열림
      setOpen(true);
      setX(-10);
    } else {
      setX(-280); // 다시 처음 위치로 이동
      setOpen(false);
    }
  };

  // 사이드바 외부 클릭시 닫히는 함수
  const handleClose = async (e) => {
    let sideArea = side.current;
    let sideCildren = side.current.contains(e.target);
    if (isOpen && (!sideArea || !sideCildren)) {
      await setX(-width);
      await setOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClose);
    return () => {
      window.removeEventListener("click", handleClose);
    };
  });

  return (
    <div className={styles.container}>
      <div
        ref={side}
        className={styles.sidebar}
        style={{
          width: `${width}px`,
          height: "100%",
          transform: `translatex(${-xPosition}px)`,
          boxShadow: isOpen ? "-5px 0px 5px rgba(0, 0, 0, 0.1)" : "none",
        }}
      >
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleMenu();
          }}
          className={styles.button}
          style={{
            filter: "drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.3))",
          }}
        >
          {isOpen ? (
            <img
              src="https://velog.velcdn.com/images/kkaerrung/post/9ed7b7af-f114-4787-a8ae-4dcd70a391fb/image.png"
              alt="closeButton"
              className={styles.closeBtn}
            />
          ) : (
            <img
              src="https://velog.velcdn.com/images/kkaerrung/post/08291fe6-e13a-42f5-877a-275a7d79df15/image.png"
              alt="openButton"
              className={styles.openBtn}
            />
          )}
        </button>

        <div className={styles.content}>
          <div className="flex-container" style={{ marginLeft: "50px" }}>
            <div onClick={() => navigate("/main")} className="icon-container">
              <HomeIconSVG
                style={{
                  filter: "drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.4))",
                }}
              />
              <span className={styles.iconText}>홈</span>
            </div>

            <div
              onClick={() => navigate("/map")}
              className="icon-container"
              style={{ marginTop: "38px" }}
            >
              <MapIconSVG
                style={{
                  filter: "drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.4))",
                }}
              />
              <span className={styles.iconText}>지도</span>
            </div>

            <div
              onClick={() => navigate("/shop")}
              className="icon-container"
              style={{ marginTop: "38px" }}
            >
              <ShopIconSVG
                style={{
                  filter: "drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.4))",
                }}
              />
              <span className={styles.iconText}>상점</span>
            </div>

            <div
              onClick={() => navigate("/Ranking")}
              className="icon-container"
              style={{ marginTop: "38px" }}
            >
              <RankingIconSVG
                style={{
                  filter: "drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.4))",
                }}
              />
              <span className={styles.iconText}>민팅</span>
            </div>

            <div
              onClick={() => navigate("/userpage")}
              className="icon-container"
              style={{ marginTop: "38px" }}
            >
              <MyPageSVG
                style={{
                  filter: "drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.4))",
                }}
              />
              <span className={styles.iconText}>마이페이지</span>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                position: "fixed",
                bottom: 20,
              }}
            >
              <img
                src="https://velog.velcdn.com/images/kkaerrung/post/9f656ffd-696c-4500-9f72-87603911b3b9/image.png"
                style={{
                  width: 129,
                  height: 129,
                  filter: "drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.6))",
                }}
                onClick={openModal}
              />
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          closeModal={closeModal}
          modalImages={modalImages}
          color="#E8E1E1"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={`${nft4}`}
              style={{ width: 281, height: 399 }}
              className="nftImage"
              alt="NFT Image 1"
            />
            <img
              src={`${Qrcode}`}
              style={{ width: 100, height: 100 }}
              className="nftImage"
              alt="QR Code"
            />
          </div>
        </Modal>
      )}
    </div>
  );
};

export default SidebarButton;
