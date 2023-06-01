import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { TeacherPage } from "./pages/teacher/teacher";
import { GamesPage } from "./pages/games/games";
import DisplayRecipe from "./pages/games/displayRecipe";

/*
const testOppskrift = {
    name: "Pannekaker",
    scale: 1,
    hvetemel: 0.75 * this.scale,
    melk: 1.25 * this.scale,
    salt: 0.13 * this.scale,
    egg: 1 * this.scale,
    smor: 0.25 * this.scale,
    steps: [
        `Bland ${(this.hvetemel)}dl mel og ${(this.salt)}ts salt. Tilsett ${this.melk/2}dl melk.`,
        'Visp sammen til en tykk og klump-fri røre.',
        `Tilsett resten av melken (${this.melk/2}dl). Visp inn ${(this.egg)} egg.`,
        'La pannekakerøren svelle i ca. ½ time.',
        'Smelt smør eller margarin i en god og varm stekepanne.',
        'Hell i en øse med pannekakerøre og vend på pannen, slik at røren legger seg i et jevnt lag.',
        'Snu pannekaken når den har stivnet på oversiden og blitt gyllenbrun på undersiden.',
        'Når pannekaken er stekt på begge sider, brettes den sammen og legges i et ildfast fat med lokk. Pannekakene holder da varmen, slik at alle kan spise sammen.',
        ],
    quiz: {
        topic: 'Pannekake oppskrift',
        level: 'Enkel',
        totalQuestions: 4,
        questions: [
            {
                question: 'Hva er første steget i oppskriften?',
                choices: ['Bland melk og salt., tilsett klump-fri røre.', 'Bland mel og salt, tilsett halvparten av melken.', 'Ingen av alternativene.'],
                type: 'MCQs',
                correctAnswer: 'Bland mel og salt, tilsett halvparten av melken.',
            },

            {
                // Smelt smør eller margarin i en god og varm stekepanne.
                // Hell i en øse med pannekakerøre og vend på pannen, slik at røren legger seg i et jevnt lag.
                // Snu pannekaken når den har stivnet på oversiden og blitt gyllenbrun på undersiden.
                question: 'Hvordan skal man helle røren i pannen?',
                choices: ['Rett i og vente.', 'Helle i og vende på pannen slik at røren er gjevn.', 'Bruke vann i pannen og dyppe den i røren.', 'Ingen av alternativene.'],
                type: 'MCQs',
                correctAnswer: 'Helle i og vende på pannen slik at røren er gjevn.',
            },
            {
                // Når pannekaken er stekt på begge sider, brettes den sammen og legges i et ildfast fat med lokk. Pannekakene holder da varmen, slik at alle kan spise sammen.
                question:
                    'Hvordan burde man lagre pannekaken når de er ferdigstekt?',
                choices: ['I kjøleskapet.', 'På et varmt gulv.', 'Ute i sola.', 'Ingen av alternativene.'],
                type: 'MCQs',
                correctAnswer: 'Ingen av alternativene.',
            },
            {
                // La pannekakerøren svelle i ca. ½ time.
                question:
                    'Hvor lenge skal pannekakerøren svelle?',
                choices: ['1 time.', '1 minutt.', '30 minutter.', 'Ingen av alternativene.'],
                type: 'MCQs',
                correctAnswer: '30 minutter.',
            }
        ],
    }
}
*/


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
              <Route path={"/games/pancake"} element={<DisplayRecipe/>}></Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
