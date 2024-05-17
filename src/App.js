import { BrowserRouter,Routes,Route } from 'react-router-dom';
import UserManageComponent from './Components/UserMange';
import './App.css';
import UserupdateCom from './Components/Update';
import UserRegistationCom from './Components/Registation';

function App() {
  return (
    <div className="Appp">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserManageComponent></UserManageComponent>}/>
        <Route path='/update-user/:id' element={<UserupdateCom></UserupdateCom>}/>
        <Route path='/register-user/' element={<UserRegistationCom></UserRegistationCom>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
