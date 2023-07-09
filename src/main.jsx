import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import App from './App.jsx';
import Home from './pages/Home.jsx';
import Trending from './pages/Trending.jsx';
import TopRated from './pages/TopRated.jsx';
import Upcoming from './pages/Upcoming.jsx';
import Movie from './pages/Movie.jsx';
import Search from './pages/Search.jsx';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="trending" element={<Trending />} />
          <Route path="top-rated" element={<TopRated />} />
          <Route path="upcoming" element={<Upcoming />} />
          <Route path="movie/:id" element={<Movie />} />
          <Route path="search" element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
