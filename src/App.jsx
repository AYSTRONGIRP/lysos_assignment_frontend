import './App.css';
import LandingPage from './components/login/Landing_page';
import Tournament from './components/tournament/Tournament';
import { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

function App() {
  const id = useSelector((state) => state.info.id);
  const [redirect, setRedirect] = useState(false); // State to handle redirect


  return (
    <Routes>
      <Route
        exact
        path="/"
        element={id ? <Navigate to="/tournaments" /> : <LandingPage />}
      />
      <Route path="/tournaments" element={<Tournament />} />
    </Routes>
  );
}

export default App;
