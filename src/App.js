import logo from './logo.svg';
import { COLORS } from './constants';
import './styles/App.css';
import About from './components/About';
import Links from './components/Links';
import Heading from './components/Heading';

function App() {
  return (
    <div className="App">
      <Heading></Heading>
      <About></About>
      <Links></Links>
    </div>
  );
}

export default App;
