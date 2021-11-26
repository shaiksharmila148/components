
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './Pages/Home';
import About from './Pages/About';
import Profile from './Pages/Profile';
import NotFound from './Pages/NotFound';
import Post from './Pages/Post';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Header/>

    </div>
    <Routes>
    <Route path='/' component={<Home/>}exact/>
    <Route path='/about' component={<About/>}/>
    <Route path='/profile' component={<Profile/>}/>
    <Route path='/post/:id' compnent={Post}/>
    <Route component ={NotFound }/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
