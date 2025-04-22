import Main from "./components/Main";
import Taskbar from "./components/Taskbar";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <section>
        <Taskbar />
        <Main />
      </section>

      <NavBar />
    </>
  );
}

export default App;
