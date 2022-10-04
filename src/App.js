import './App.css';
import './components/Menu/NavBar'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import YohijiYamamoto from './components/Paginas/YohijiYamamoto';
import VivienneWestwood from './components/Paginas/VivienneWestwood';
import Versace from './components/Paginas/Versace';
import NavBarExample from './components/Menu/NavBar';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBarExample/> 
          <Routes>
          <Route path= '/viviennewestwood' element= { <VivienneWestwood /> } />
          <Route path= '/versace' element= { <Versace /> } />
          <Route path= '/' element= { <YohijiYamamoto /> } >
          <Route path='*' element= {<Navigate replace to="/"/> }/>
          </Route>
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
