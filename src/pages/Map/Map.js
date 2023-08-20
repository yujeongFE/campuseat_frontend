import React, { useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";

const MapScreen = () => {
  const navigate = useNavigate();

  const fixedLocation = {
    lat: 37.587211,
    lng: 127.029889,
  };

  const [markers, setMarkers] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedMarker, setSelectedMarker] = useState(null);

  const handleCategoryClick = (category) => {
    const dummyData = [
      {
        category: "중식",
        name: "더씨",
        target: "mine",
        location: { lat: 37.586877, lng: 127.02957 },
      },
      {
        category: "중식",
        name: "하오마라",
        target: "friend",
        friendid: "1",
        location: { lat: 37.5867516, lng: 127.029876 },
      },
      {
        category: "중식",
        name: "라사천 마라탕",
        target: "friend",
        friendid: "1",
        location: { lat: 37.587833, lng: 127.029901 },
      },
      {
        category: "중식",
        name: "라사천 마라탕",
        target: "friend",
        friendid: "1",
        location: { lat: 37.587833, lng: 127.029901 },
      },
      {
        category: "중식",
        name: "일미옥",
        target: "friend",
        friendid: "1",
        location: { lat: 37.587699, lng: 127.029932 },
      },
      {
        category: "중식",
        name: "칠기도삭면 소롱포",
        target: "mine",
        location: { lat: 37.586828, lng: 127.029792 },
      },
      {
        category: "중식",
        name: "천사 마라탕",
        target: "mine",
        location: { lat: 37.587842, lng: 127.028903 },
      },
      {
        category: "중식",
        name: "금룡가",
        target: "mine",
        location: { lat: 37.588058, lng: 127.029615 },
      },
      {
        category: "일식",
        name: "돈카와치",
        target: "friend",
        friendid: "1",
        location: { lat: 37.588209, lng: 127.029612 },
      },
      {
        category: "일식",
        name: "코우야 라멘",
        target: "friend",
        friendid: "2",
        location: { lat: 37.58005, lng: 127.028926 },
      },
      {
        category: "일식",
        name: "이세 돈까스",
        target: "friend",
        friendid: "1",
        shopId: "1",
        location: { lat: 37.587747, lng: 127.029424 },
      },
      {
        category: "일식",
        name: "한술 돈까스",
        target: "friend",
        friendid: "2",
        shopId: "1",
        location: { lat: 37.587745, lng: 127.029423 },
      },
      {
        category: "일식",
        name: "대부 라멘",
        target: "friend",
        friendid: "2",
        location: { lat: 37.58546, lng: 127.029818 },
      },
      {
        category: "일식",
        name: "사이코우 스시",
        target: "friend",
        friendid: "2",
        location: { lat: 37.585715, lng: 127.029684 },
      },
      {
        category: "일식",
        name: "스시전",
        target: "friend",
        friendid: "2",
        location: { lat: 37.585438, lng: 127.029504 },
      },
      {
        category: "일식",
        name: "탄탄멘",
        target: "friend",
        friendid: "1",
        location: { lat: 37.585354, lng: 127.029724 },
      },
    ];
    setMarkers(dummyData);
    if (selectedCategory === category) {
      setSelectedCategory("");
    } else {
      setSelectedCategory(category);
      setMarkers(dummyData);
    }
  };

  const handleMarkerClick = (marker) => {
    if (marker.shopId === "1") {
      // 클릭된 마커의 shopId 확인
      navigate("/shop"); // /shop 페이지로 이동
    } else {
      setSelectedMarker(marker); // 다른 마커의 정보 표시
    }
  };

  return (
    <>
      <Header />
      <div style={{ position: "relative", width: "393px", height: "852px" }}>
        <Map
          className="myMap"
          style={{ width: "393px", height: "852px", zIndex: 0 }}
          center={fixedLocation}
          level={0}
        >
          <MapMarker
            position={fixedLocation}
            image={{
              src: "https://velog.velcdn.com/images/kkaerrung/post/0dcefd2b-039c-4155-94b9-c53c2a420214/image.png",
              size: new window.kakao.maps.Size(50, 80),
            }}
          ></MapMarker>

          {markers.map((marker, index) => (
            <MapMarker
              key={index}
              position={marker.location}
              image={{
                src:
                  marker.target === "friend"
                    ? marker.friendid === "1"
                      ? "https://velog.velcdn.com/images/kkaerrung/post/00462463-34b3-467e-a360-88f54573e539/image.png"
                      : marker.friendid === "2"
                      ? "https://velog.velcdn.com/images/kkaerrung/post/da9a3071-8c28-4f0f-b716-7d59d5c3fb71/image.png"
                      : ""
                    : marker.target === "mine"
                    ? "https://velog.velcdn.com/images/kkaerrung/post/131f973e-b756-4c49-8943-6d3f1bab72e6/image.png"
                    : "",
                size:
                  marker.target === "mine"
                    ? new window.kakao.maps.Size(30, 40)
                    : new window.kakao.maps.Size(45, 50),
              }}
              onClick={() => handleMarkerClick(marker)}
            ></MapMarker>
          ))}
        </Map>
        <div
          style={{
            position: "absolute",
            top: selectedCategory === "필터" ? "650px" : "750px",
            left: "20px",
            zIndex: 1,
          }}
        >
          <button
            onClick={() => setSelectedCategory("필터")}
            style={{
              backgroundColor:
                selectedCategory === "필터" ? "#FF852D" : "#FF5C00",
              color: selectedCategory === "필터" ? "white" : "white",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.)",
              fontSize: "17px",
              padding: "10px 20px",
              fontWeight: 550,
              margin: "5px",
              border: "white",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            필터
          </button>
          {selectedCategory === "필터" && (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <button
                style={{
                  width: 69,
                  height: 32,
                  backgroundColor: "white",
                  border: "none",
                  borderRadius: 5,
                  fontWeight: 700,
                  marginLeft: 5,
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.3)",
                }}
                onClick={() => handleCategoryClick("중식")}
              >
                중식
              </button>
              <button
                style={{
                  width: 69,
                  height: 32,
                  backgroundColor: "white",
                  border: "none",
                  borderRadius: 5,
                  fontWeight: 700,
                  marginLeft: 5,
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.3)",
                }}
                onClick={() => handleCategoryClick("일식")}
              >
                일식
              </button>
              <button
                style={{
                  width: 69,
                  height: 32,
                  backgroundColor: "white",
                  border: "white",
                  borderRadius: 5,
                  fontWeight: 700,
                  marginLeft: 5,
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.3)",
                }}
                onClick={() => handleCategoryClick("한식")}
              >
                한식
              </button>
              <button
                style={{
                  width: 69,
                  height: 32,
                  backgroundColor: "white",
                  border: "white",
                  borderRadius: 5,
                  fontWeight: 700,
                  marginLeft: 5,
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.3)",
                }}
                onClick={() => handleCategoryClick("분식")}
              >
                분식
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MapScreen;
