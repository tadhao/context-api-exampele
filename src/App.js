import './App.css';
import UserContext from './hooks/context'
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'

function App() {
  return (
    <UserContext.Provider value={"Mango"}>
      <ComponentA />
      <ComponentB />
    </UserContext.Provider>
  );
}

export default App;
