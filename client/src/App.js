import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Home from "./pages/Home";
import AddEdit from "./pages/AddEdit";
import View from "./pages/View";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className='App'>
          <ToastContainer position="top-center" />
          <h1  style={{color:"red"}}>CRUD Application</h1>
          <Routes>
            <Route exact path="/" Component={Home}/>
            <Route  path="/addContact" Component={AddEdit}/>
            <Route  path="/update/:id" Component={AddEdit}/>
            <Route  path="/view/:id" Component={View}/>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
