import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import "primereact/resources/themes/lara-light-cyan/theme.css";
import Dashboard from './components/Dashboard';
import CreatePost from './components/CreatePost';
import CreateCategory from './components/CreateCategory';
import MainProfile from './pages/MainProfile';
import Homedash from './components/Homedash';
import Comment from './components/Comment';

function App() {
  return (
   
      <Routes>
        <Route path="/dashboard" element={<MainProfile />}>
          <Route index element={<Homedash/>} />

          <Route path="createpost" element={<CreatePost/>} />
          <Route path="category" element={<CreateCategory/>} />
          <Route path="comment" element={<Comment/>} />
        </Route>
      </Routes>
    
  );
}

export default App;
