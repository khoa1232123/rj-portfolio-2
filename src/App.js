import "./App.css";
import {
  About,
  Contact,
  Experience,
  Footer,
  Header,
  Projects,
  Service,
} from "./components";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Service />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
