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
import ClassCounter1 from './components/hooks/useeffect/ClassCounter1';
import CounterHook1 from './components/hooks/useeffect/CounterHook1';



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
      <CounterHook1 />
      </div>
  );
}

export default App;
