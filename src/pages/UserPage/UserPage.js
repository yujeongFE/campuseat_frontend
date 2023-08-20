import React from "react";
import Header from "../../components/Header/Header";
//import { ReactComponent as HeaderSVG } from "../../assets/Header.svg";
import { ReactComponent as ProfileSVG } from "../../assets/profile.svg";
import "./UserPage.css";
import { useState } from "react";
import Modal from "./Modal";

const UserPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const modalImages = [
    "https://velog.velcdn.com/images/kkaerrung/post/927b7221-53d5-480c-b3ca-490dd25dd047/image.png",
  ];

  return (
    <>
      <Header />
      <div className="profile-container">
        <ProfileSVG className="centered-svg" />
      </div>
      <div className="script-container">
        <span className="script-name">
          호돌이의 상영님
          <br />
        </span>
        <span className="script-scripts">
          8월의 <span style={{ color: "#FF852D" }}>맞춤 혜택</span>을
          확인해보세요.{" "}
        </span>
      </div>
      <div className="line-box">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontSize: 15,
              fontWeight: 700,
              marginLeft: 30,
              marginTop: 10,
            }}
          >
            나의 쿠폰
          </span>
          <span
            style={{
              marginLeft: "auto",
              fontSize: 15,
              fontWeight: 700,
              marginRight: 30,
              color: "#FF852D",
              marginTop: 4,
            }}
          >
            총 6개 <br />
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 30,
          }}
        >
          <span style={{ fontSize: 15, fontWeight: 700, marginLeft: 30 }}>
            잔여 포인트
          </span>
          <span
            style={{
              marginLeft: "auto",
              fontSize: 15,
              fontWeight: 700,
              marginRight: 30,
              color: "#FF852D",
            }}
          >
            5,500원 <br />
          </span>
        </div>
      </div>
      <div
        style={{
          marginTop: "30px",
          textAlign: "center",
        }}
      >
        <span style={{ fontSize: 14, fontWeight: 700 }}>
          이번 달 누적 <span style={{ color: "#FF852D" }}>61,500원</span>을
          절약했어요!
        </span>
      </div>
      <div className="line-boxes1">
        <div className="image-container">
          <img
            src="https://velog.velcdn.com/images/kkaerrung/post/49b36dba-72d0-47a5-803d-7e2ccd2f740d/image.png"
            style={{
              width: 80,
              height: 40,
              left: 10,
            }}
          />
          <div className="white-box">
            <span
              style={{ display: "block", textAlign: "center", fontWeight: 700 }}
            >
              <div className="text-frame">신내떡</div>
            </span>
          </div>
        </div>
        <div className="image-container">
          <img
            src="https://velog.velcdn.com/images/kkaerrung/post/442ac780-38a0-4ce7-bdde-d1cf43234338/image.png"
            style={{ width: 80, height: 40, left: 10 }}
          />
          <div className="white-box">
            {" "}
            <span
              style={{ display: "block", textAlign: "center", fontWeight: 600 }}
            >
              <div className="text-frame">버거인</div>
            </span>
          </div>
        </div>
        <div className="image-container">
          <img
            src="https://velog.velcdn.com/images/kkaerrung/post/cf4b8edc-5bd2-467e-bfe0-242d4ad84cdd/image.png"
            style={{ width: 80, height: 40, left: 10 }}
          />
          <div className="white-box">
            <span
              style={{ display: "block", textAlign: "center", fontWeight: 700 }}
            >
              <div className="text-frame">비일</div>
            </span>
          </div>
        </div>
        <div className="image-container">
          <img
            src="https://velog.velcdn.com/images/kkaerrung/post/f3616b15-4fac-4bb2-bf4e-391f27305ced/image.png"
            style={{ width: 80, height: 40, left: 10 }}
          />
          <div className="white-box">
            <span
              style={{ display: "block", textAlign: "center", fontWeight: 700 }}
            >
              <div className="text-frame">마라덕</div>
            </span>
          </div>
        </div>
        <div className="image-container">
          <img
            src="https://velog.velcdn.com/images/kkaerrung/post/68cc871e-5d51-4ae8-887e-12f7d1556350/image.png"
            style={{ width: 80, height: 40, left: 10 }}
          />{" "}
          <div className="white-box">
            <span
              style={{ display: "block", textAlign: "center", fontWeight: 500 }}
            >
              <div className="text-frame">3KM</div>
            </span>
          </div>
        </div>
        <div className="image-container">
          <img
            src="https://velog.velcdn.com/images/kkaerrung/post/69e5ff99-3f07-41c2-980c-a376491f4870/image.png"
            style={{ width: 80, height: 40, left: 10 }}
          />
          <div className="white-box">
            <span
              style={{ display: "block", textAlign: "center", fontWeight: 700 }}
            >
              <div className="text-frame">춘자</div>
            </span>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 23,
        }}
      >
        <span
          style={{
            color: "#2D2D2D",
            textAlign: "center",
            fontWeight: 700,
            fontSize: 14,
          }}
        >
          가게 별 스템프 확인하고,
          <br />
          <span style={{ color: "#FF852D" }}>
            메뉴 하나 더 받아가세요!
          </span>{" "}
        </span>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <div
            className="image-wrapper"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              fontWeight: 800,
              marginRight: 20,
            }}
          >
            <img
              src="https://velog.velcdn.com/images/kkaerrung/post/0339f714-a7a9-4db9-ba15-2e4a8846235e/image.png"
              style={{
                width: "100%",
                height: "auto",
                maxWidth: 112,
                maxHeight: 104,
              }}
              alt="신내떡"
              onClick={() => openModal()}
            />
            신내떡 <span style={{ color: "#FF6D1A" }}>6개</span>
          </div>
          <div
            className="image-wrapper"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              fontWeight: 800,
            }}
          >
            <img
              src="https://velog.velcdn.com/images/kkaerrung/post/dc7ba499-dabf-4d91-a224-f71551c75f7f/image.png"
              style={{
                width: "100%",
                height: "auto",
                maxWidth: 112,
                maxHeight: 104,
              }}
              alt="현고대 닭발"
              onClick={() => openModal()}
            />
            현고대 닭발 <span style={{ color: "#FF6D1A" }}>7개</span>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        modalImages={modalImages}
      />
    </>
  );
};

export default UserPage;
