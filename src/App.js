import "./App.css";
import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact";
import Home from "./Component/Home/Home";
import Navbar from "./Component/Navbar/Navbar";
// import Project from "./Component/Project/Project";

function App() {
  return <div className="App">
    <Navbar />
    <Home />
    <About />
    {/* <Project /> */}
    <Contact />
  </div>;
}

export default App;
