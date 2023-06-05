import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const TodoList = React.lazy(() => import("../components/pages/TodoList"));
const Home = React.lazy(() => import("../components/pages/Home"));
const About = React.lazy(() => import("../components/pages/About"));
const Profile = React.lazy(() => import("../components/pages/Profile"));

export default function AppRoute() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about/:name/:id" element={<About />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
