import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Qualification from "./components/qualification/Qualification";
import Services from "./components/services/Services";
import Skill from "./components/skill/Skill";
function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skill />
        <Services />
        <Qualification/>
        <Contact/>
      </main>
    </>
  );
}

export default App;
