import { BrowserRouter,Routes,Route } from 'react-router-dom';
import UserManageComponent from './Components/UserMange';
import './App.css';
import UserupdateCom from './Components/Update';

function App() {
  return (
    <div className="Appp">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserManageComponent></UserManageComponent>}/>
        <Route path='/update-user/:id' element={<UserupdateCom></UserupdateCom>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
