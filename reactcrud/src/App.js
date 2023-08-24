import './App.css';
import Create from './components/Create';
import Read from './components/Read';
import Delete from './components/Delete';
import Update from './components/Update';
import {Routes, Route, useNavigate} from 'react-router-dom';


function App() {

  const navigate = useNavigate();

  const navigateToCreate = () =>{
    let path = '/create'
    navigate(path)
  }
  const navigateToRead = () =>{
    let path = '/read'
    navigate(path)
  }
  // const navigateToDelete = () =>{
  //   let path = '/delete'
  //   navigate(path)
  // }
  // const navigateToUpdate = () =>{
  //   let path = '/update'
  //   navigate(path)
  // }

  return (
      
    <div>
      <div className="main">
        <div className='header'>
          <h2>React CRUD Application</h2>
          <div className='buttons'>  
            <button className='ui button' onClick={navigateToCreate}>Create Entry</button>
            <button className='ui button' onClick={navigateToRead}>Read Entry</button>
            {/* <button className='ui button' onClick={navigateToUpdate}>Update Entry</button>
            <button className='ui button' onClick={navigateToDelete}>Delete Entry</button> */}
          </div>
        </div>
         
            <Routes> 
              <Route path='/create' element={<Create/>}/>
              <Route path='/read' element={<Read/>}/>
              <Route path='/update' element={<Update/>}/>
              <Route path='/delete' element={<Delete/>}/>
            </Routes>  
          
      </div>    
    </div>    
  );
}

export default App;
