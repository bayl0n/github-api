import './App.css';
import React from 'react';
import AppNavBar from './components/AppNavbar';
import UserDisplay from './components/UserDisplay';

function App() {
  return (
    <div>
      <AppNavBar />
      <UserDisplay />
    </div>
  );
}

export default App;