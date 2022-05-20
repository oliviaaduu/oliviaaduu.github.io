import logo from './logo.svg';
import { COLORS } from './constants';
import './styles/App.css';
import About from './components/About';
import Links from './components/Links';
import Heading from './components/Heading';
import Projects from './components/Projects';
import Logo from "./components/Logo";

function App() {
  return (
    <div className="App">
      <Heading></Heading>
      <About></About>
      <Projects></Projects>
      <Links></Links>
      <p>© Olivia Du, May 2022.</p>
      <Logo></Logo>
    </div>
  );
}

export default App;
