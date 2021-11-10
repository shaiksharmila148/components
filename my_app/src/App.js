import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';


function App() {
  return (
    <div className="App">
  
      <Greet name = "lucky"  college = "IIT">
      <p> this is children property</p>
    </Greet>
    <Greet name = "ravi" college = "Oxford"/>
    <Greet name ="kumar"/>

    <Welcome/>

    </div>
  );
}

export default App;
