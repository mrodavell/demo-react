import { BrowserRouter, Routes, Route } from "react-router-dom";

import TodoList from "../components/pages/TodoList";
import Home from "../components/pages/Home";
import About from "../components/pages/About";
import Profile from "../components/pages/Profile";

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
