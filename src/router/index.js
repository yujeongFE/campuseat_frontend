import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Lending from "../pages/Auth/Lending";
import Login from "../pages/Auth/Login";
import Main from "../pages/Main/Main";
import MapScreen from "../pages/Map/Map";
import Shop from "../pages/Shop/Shop";
import Ranking from "../pages/Shop/Ranking";
import Review from "../pages/Shop/Review";
import UserPage from "../pages/UserPage/UserPage";
import CreateReview from "../pages/Shop/CreateReview";

const DefaultRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Lending />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/map" element={<MapScreen />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/review" element={<Review />} />
        <Route path="/review/create" element={<CreateReview />} />
        <Route path="/userPage" element={<UserPage />} />
      </Routes>
    </Router>
  );
};

export default DefaultRouter;
