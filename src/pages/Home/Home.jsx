import "./index.css";
import RightHero from "../../components/rightHero";
import LeftHero from "../../components/leftHero";
function App() {
  return (
    <>
        <div className="hero">
          <LeftHero></LeftHero>
          <RightHero></RightHero>
        </div>
    </>
  );
}

export default App;
