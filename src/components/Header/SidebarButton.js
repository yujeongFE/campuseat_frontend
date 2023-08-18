import React, { useEffect, useRef, useState } from "react";
import styles from "./sidebar.module.css";
import { useNavigate } from "react-router-dom";
import { ReactComponent as HomeIconSVG } from "../../assets/homeicon.svg";
import { ReactComponent as MyPageSVG } from "../../assets/mypageicon.svg";
import { ReactComponent as MapIconSVG } from "../../assets/mapicon.svg";
import { ReactComponent as ShopIconSVG } from "../../assets/shopicon.svg";
import { ReactComponent as RankingIconSVG } from "../../assets/rankingicon.svg";
import { ReactComponent as ProfileIconSVG } from "../../assets/profile.svg";
const SidebarButton = ({ width = 280, children }) => {
  const [isOpen, setOpen] = useState(false);
  const [xPosition, setX] = useState(-280);
  const side = useRef();
  const navigate = useNavigate();

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
              onClick={() => navigate("/ranking")}
              className="icon-container"
              style={{ marginTop: "38px" }}
            >
              <RankingIconSVG
                style={{
                  filter: "drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.4))",
                }}
              />
              <span className={styles.iconText}>랭킹</span>
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
              <ProfileIconSVG
                style={{
                  filter: "drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.6))",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarButton;
