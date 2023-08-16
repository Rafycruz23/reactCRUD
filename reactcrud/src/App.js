import './App.css';
import Create from './components/Create';
import Read from './components/Read';
import Delete from './components/Delete';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
      
    <div>
      <div className="main">
        <div className='header'>
          <h2>React Crud Application</h2>
        </div>
          <Router>
            <Routes> 
              <Route path='/create' element={<Create/>}/>
              <Route path='/read' element={<Read/>}/>
              <Route path='/delete' element={<Delete/>}/>
            </Routes>  
          </Router> 
      </div>    
    </div>    
  );
}

export default App;
