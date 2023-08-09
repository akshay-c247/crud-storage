import logo from './logo.svg';
import './App.css';
import Create from './Components/Create';
import List from './Components/List';
import Edit from './Components/Edit';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
         <Route exact path="" element={<Create/>}/>
         <Route exact path="/list"  element={<List/>}/>
         <Route exact path="/edit"  element={<Edit/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
