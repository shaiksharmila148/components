import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import Forms from './components/Forms';

function App() {
  return (
    <div className="App">
            <Form/>

<h1 className={styles.success}>success</h1>
<h1 className='error'>error</h1>

<Inline />
<Stylesheet enabled={true} />
<Table />
<NameList />
<UserGreeting />
<ParentComponent />
      <EventBind />
      </div>
  );
}

export default App;
