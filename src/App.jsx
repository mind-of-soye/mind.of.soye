import Main from "./components/Main";
import Taskbar from "./components/Taskbar";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <div>
        <Taskbar />
        <Main />
      </div>

      <NavBar />
    </>
  );
}

export default App;
