import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { TeacherPage } from "./pages/teacher/teacher";
import { GamesPage } from "./pages/games/games";
import DisplayRecipe from "./pages/games/displayRecipe";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {Dropdown} from "react-bootstrap";

function Navbar(){
    return (
        <nav className={"navbar"}
        >
            <Link to={"/"}>
                <img src={process.env.PUBLIC_URL + "/images/Chew_Logo_Orange.png"} alt={"Chew Logo"}
                     style={{width: "7vw", minWidth: "100px", height: "auto"}}
                />
            </Link>
            <Dropdown
                style={{ position:"absolute", right: "0px",marginRight: "2vw", width: "4vw", minWidth: "25px", height: "auto"}}
            >
                <Dropdown.Toggle variant="success" id="dropdown-basic"
                                    style={{backgroundColor: "#ff5b2e", border: "none", }}
                >
                    <img src={process.env.PUBLIC_URL + "/images/burger-menu.svg"} alt={"Burger menu"}
                         style={{width: "100%", minWidth: "30px", height: "auto"}}
                    />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item><Link to={"/"}>Home</Link></Dropdown.Item>
                    <Dropdown.Item><Link to={"/teacher"}>Teacher</Link></Dropdown.Item>
                    <Dropdown.Item><Link to={"/games"}>Games</Link></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </nav>
    );
}

function FrontPage() {
    return (
        <div>
            <h1>Hello FrontPage</h1>
            <div>
                <Link to={"/teacher/"}>Teacher</Link>
            </div>
            <div>
                <Link to={"/games/"}>Games</Link>
            </div>
        </div>
    );
}

function App() {
  return (
      <BrowserRouter>
            <Navbar/>
          <Routes>
              <Route path={"/"} element={<FrontPage/>}></Route>
              <Route path={"/teacher/"} element={<TeacherPage/>}></Route>
              <Route path={"/games/"} element={<GamesPage/>}></Route>
              <Route path={"/games/pancake"} element={<DisplayRecipe/>}></Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
