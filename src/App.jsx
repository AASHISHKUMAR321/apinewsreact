import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import LabelBottomNavigation from "./components/Navbar";
import { Home } from "./components/Home";
import { Routes, Route } from "react-router-dom";
import { Categorys } from "./components/Categorys";
import styled from "styled-components";
import { ShowNews } from "./components/ShowNews";
import { Search } from "./components/Search";
import { Show } from "./components/Show";

const Head = styled.div`
  width: 100%;
  height: 50px;
  font-size: 30px;
  background-color: #6200ee;
  color: white;
  text-align: center;
  margin: auto;
`;
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Head>Api News</Head>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/category"} element={<Categorys />} />
        <Route path={"/category/:id"} element={<ShowNews />} />
        <Route path={"/search"} element={<Search />} />
        <Route path={"/show"} element={<Show />} />
      </Routes>

      <LabelBottomNavigation />
    </div>
  );
}

export default App;
