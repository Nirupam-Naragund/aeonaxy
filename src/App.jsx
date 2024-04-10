import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import SignupPage from './components/SignUp.jsx'
import ProfileSetup from './components/Page2/Page-2.jsx';
import DribbbleSignupPage from './components/Page3/Page-3.jsx';
import EmailVerificationPage from './components/Page4/Page-4.jsx';


const App = () => {
  return (
    <>
    <Router>
      <Routes>
      <Route path='/' element={<SignupPage />} />
      <Route path='/Page-2'  element={<ProfileSetup />} />
      <Route path='/Page-3' element={<DribbbleSignupPage />} />
      <Route path='/Page-4' element={<EmailVerificationPage />} />
      </Routes>
    </Router>
    
    </>
  )
}

export default App
