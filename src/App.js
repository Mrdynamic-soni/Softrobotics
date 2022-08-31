import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'react-bootstrap';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import MovieCard from './Components/MovieCard';

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Navbar />} />
        <Route path="/moviecard" element={<MovieCard />} />
      </Routes>
    </>
  )
}

export default App;