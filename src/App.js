import logo from './logo.svg';
import './App.css';

import ItemCount from './components/ItemCount';

function App() {
  return (
    <div className="App">
      <ItemCount initial={1} stock={9999}/>
    </div>
  );
}

export default App;
