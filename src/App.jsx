import "./App.css";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import Scroll from "./components/useScroll";
import About from "./components/About";
import Projects from "./components/Projects";
function App() {
  return (
    <>
      {/* <Scroll /> */}
      <Sidebar />
      <Home />
      <About />
      <Projects/>
      {/* <Home /> */}
    </>
  );
}

export default App;
