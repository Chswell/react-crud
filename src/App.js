import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import LoginPage from './components/pages/LoginPage.jsx'
import HomePage from './components/pages/HomePage.jsx'
import NotFound from './components/pages/NotFound.jsx'
import AuthContext from './components/context/AuthContext'

function App() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <AuthContext.Provider value={ { username, password, isLoggedIn, setUsername, setPassword, setIsLoggedIn }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" exact element={<LoginPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthContext.Provider>
      </BrowserRouter>
    </div>

    
  );
}

export default App;
