import React, { useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const MapScreen = () => {
  const fixedLocation = {
    lat: 37.587211, // 고정 위도 값
    lng: 127.029889, // 고정 경도 값
  };

  const [markers, setMarkers] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

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
        location: { lat: 37.587747, lng: 127.029424 },
      },
      {
        category: "일식",
        name: "한술 돈까스",
        target: "friend",
        friendid: "2",
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
  };

  return (
    <div style={{ position: "relative", width: "393px", height: "852px" }}>
      <Map
        className="myMap"
        style={{ width: "393px", height: "852px", zIndex: 0 }}
        center={fixedLocation}
        level={2}
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
                    ? "https://velog.velcdn.com/images/kkaerrung/post/00462463-34b3-467e-a360-88f54573e539/image.png" // Friend 1의 마커 이미지 URL로 변경
                    : marker.friendid === "2"
                    ? "https://velog.velcdn.com/images/kkaerrung/post/da9a3071-8c28-4f0f-b716-7d59d5c3fb71/image.png" // Friend 2의 마커 이미지 URL로 변경
                    : "" // friendid가 1 또는 2가 아닌 경우 기본값으로 설정
                  : marker.target === "mine"
                  ? "https://velog.velcdn.com/images/kkaerrung/post/86be4a99-442a-4e09-b363-31c4ce31821f/image.png" // Mine 마커 이미지 URL로 변경
                  : "", // 기본값으로 설정
              size:
                marker.target === "mine"
                  ? new window.kakao.maps.Size(30, 35) // Mine 마커의 이미지 크기로 변경
                  : new window.kakao.maps.Size(40, 40), // 나머지 마커의 이미지 크기
            }}
          ></MapMarker>
        ))}
      </Map>
    </div>
  );
};

export default MapScreen;
