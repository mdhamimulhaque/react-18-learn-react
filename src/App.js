// import logo from './logo.svg';
import './App.css';
// import Props from './components/Props';
// import StateLearn from './components/StateLearn';
// import Event from './components/Event';
// import Parent from './components/PassDataParentChild/childToParentPassArgument/Parent';
import DynamicData from './components/DynamicData';

function App() {
  return (
    <div className="App">
      {/* <======== props learn ========>*/}
      {/* --------------------------------- */}
      {/* <Props name='Md Hamimul Haque' />
      <Props name='Rafaet' >
        <h4>I live in Narail.</h4>
        <p>I love pets.</p>
        <button>Learn more</button>
      </Props>
      <Props name='Arman' /> */}


      {/* <======== state  use learn ========>*/}
      {/* ------------------------------------- */}
      {/* <StateLearn /> */}


      {/* <========events learn ========>*/}
      {/* ------------------------------- */}
      {/* <Event /> */}


      {/* <========pass data parent to child && child to parents ========>*/}
      {/* ----------------------------------------------------------------- */}
      {/* <Parent /> */}

      {/* <======= dynamic data ========> */}
      {/* ------------------------------- */}
      <DynamicData />

    </div>
  );
}

export default App;
