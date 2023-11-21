import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GoogleLogin from './pages/GoogleLogin';
import LoginCallback from './pages/LoginCallback';
import AuthTest from './pages/AuthTest';
import Home from './pages/Home';

declare global {
  interface Window {
    googleLoginPopup: Window | null;
  }
}
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<GoogleLogin />} />
      <Route path="/login/callback/:token" element={<LoginCallback />} />
      <Route path="/test" element={<AuthTest />} />
    </Routes>
  )
}
export default App;