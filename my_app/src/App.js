import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';




function App() {
  return (
    <div className="App">
       <Counter/>
      <Message/>
  
      <Greet name = "lucky"  college = "IIT">
      <p> this is children property</p>
    </Greet>
    <Greet name = "ravi" college = "Oxford">
      <button>click me</button>
    </Greet>
    <Greet />

    <Welcome name ="kumar" alias = "ravi"/>

    </div>
  );
}

export default App;
