import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import MainPage from "./main/main/MainPage";
import AboutMePage from "./main/aboutMe/AboutMePage";
import UserPage from "./main/user/UserPage";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<MainPage/>} />
            <Route path={"/about-me"} element={<AboutMePage/>} />
            <Route path={"/user/:path"} element={<UserPage/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
