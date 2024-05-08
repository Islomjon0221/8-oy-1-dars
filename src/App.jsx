// MY FILE
import "./App.css";
import Header from "./components/header";
import RightHero from "./components/rightHero";
import LeftHero from "./components/leftHero";
// FUNCTION
function App() {
  return (
    <>
      <div className="container">
        <Header></Header>
        <div className="hero">
          <LeftHero></LeftHero>
          <RightHero></RightHero>
        </div>
      </div>
    </>
  );
}

export default App;
