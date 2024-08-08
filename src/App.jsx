import "./App.css";
import MainSec from "./MainSec";
import Aside from "./Aside";
import TopBar from "./topHeader";
import InfoSec from "./InfoSec";
function App() {
  return (
    <>
      <Aside></Aside>
      <div>
        <TopBar></TopBar>
        <div className="pl-[20px] md:left-[224px] -z-10 absolute left-0 right-0 top-[70px]">
          <InfoSec></InfoSec>
        </div>
      </div>
    </>
  );
}

export default App;
