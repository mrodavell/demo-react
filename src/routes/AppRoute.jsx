import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = React.lazy(() => import("../components/pages/Home"));
const About = React.lazy(() => import("../components/pages/About"));
const Profile = React.lazy(() => import("../components/pages/Profile"));
const Login = React.lazy(() => import("../components/pages/Login"))

export default function AppRoute() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about/:name/:id" element={<About />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
