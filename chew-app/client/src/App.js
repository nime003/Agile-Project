import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { TeacherPage } from "./pages/teacher/teacher";
import { GamesPage } from "./pages/games/games";


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
          <Link to={"/"}>Home</Link>
          <Routes>
              <Route path={"/"} element={<FrontPage/>}></Route>
              <Route path={"/teacher/"} element={<TeacherPage/>}></Route>
              <Route path={"/games/"} element={<GamesPage/>}></Route>
              <Route path={"/games/pancake"} element={<GamesPage/>}></Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
