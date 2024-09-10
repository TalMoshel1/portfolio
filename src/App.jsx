import "./App.css";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import Scroll from "./components/useScroll";
import About from "./components/About";
import Projects from "./components/Projects";
import Technologies from "./components/ui/Technologies";

function App() {
  return (
    <>
      {/* <Scroll /> */}
      <Sidebar />
      {/* <Home /> */}
      <About />
      <Technologies/>
      <Projects/>
      {/* <Home /> */}
    </>
  );
}

export default App;
