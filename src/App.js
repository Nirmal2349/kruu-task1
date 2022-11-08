import './App.css';
import Home from './components/home';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Add from './components/add';
import Edit from './components/edit';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<Add />} />
          <Route path="/edit/:id" element={<Edit/>}/>
        </Routes>
      </Router>
    </div>
  );
}




export default App;
