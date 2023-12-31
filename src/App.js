import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './componentes/Navbar';
import Account from './pages/Account';
import Home from './pages/Home';
import Signin from './pages/Signin';
import { AuthContextProvider } from './context/AuthContext';
import Protected from './componentes/Protected';

function App() {
  return (
    <div>
      <AuthContextProvider>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Signin />} />
          <Route 
          path='/account' 
          element={
          <Protected>
            <Account />
          </Protected>} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
