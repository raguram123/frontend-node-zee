import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Portal from './components/dashboard/Portal';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';



import Login from './components/Login/Login';
import { UserProvider } from './components/Context/UserContext';
import { LoginProvider } from './components/Context/LoginContext';



function App() {
  return (
    <UserProvider>
      <LoginProvider>
        <Routes>
          <Route path='/' element={<Login />} />
        
          <Route path='/portal/' element={<Portal />} >
            <Route path='dashboard' element={<Dashboard />} />
           
    
            
          </Route>
        </Routes>
      </LoginProvider>
    </UserProvider>
  );
}

export default App;

