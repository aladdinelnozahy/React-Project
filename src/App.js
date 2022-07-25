// import logo from './logo.svg';
import './App.css';
import{Header} from './Components/Header/Header'
import{AboutMe} from './Components/AboutMe/AboutMe'
import{Skills} from './Components/Skills/Skills'
import{Portofolio} from './Components/Portofolio/Portofolio'
import{Footer} from './Components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <AboutMe/>
      <Skills/>
      <Portofolio/>
      <Footer/>
    </div>
  );
}

export default App;
