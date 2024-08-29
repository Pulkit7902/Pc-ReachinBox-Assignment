import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
    
    <main>
    <Outlet/>
   

    </main>
      
    </>
  );
}

export default App;
