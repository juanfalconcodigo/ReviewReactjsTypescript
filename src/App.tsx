import './App.css';
import CounterComponent from './components/counter.component';
import FormComponent from './components/form.component';
import Functions from './components/functions.component';
import LiteralObject from './components/literalobject.component';
import LoginComponent from './components/login.component';
import TypeBasic from './components/TypeBasic.component';
import UserComponent from './components/user.component';

function App() {
  return (
    <div className="mt-2">
      <h1>Review Reactjs</h1>
      <hr/>
      <TypeBasic/>
      <hr/>
      <LiteralObject/>
      <hr/>
      <Functions/>
      <hr/>
      <CounterComponent/>
      <hr/>
      <LoginComponent/>
      <hr/>
      <UserComponent/>
      <hr/>
      <FormComponent/>
    </div>
  );
}

export default App;
