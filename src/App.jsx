import Main from "./components/Main";
import Taskbar from "./components/Taskbar";
import NavBar from "./components/NavBar";
import QuoteBlock from "./components/QuoteBlock";

function App() {
  return (
    <>
      <Taskbar />

      <section>
        <Main />
        <QuoteBlock />
      </section>

      <NavBar />
    </>
  );
}

export default App;
