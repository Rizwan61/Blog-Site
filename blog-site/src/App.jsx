import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Navbar from './componets/Navbar'
import { useEffect } from 'react'
import axios from 'axios'
import Details from './componets/Details'

function App() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/user/allposts").then((res) => {
      setPost(res.data.allpost);
      console.log(res.data.allpost);
    })
  }, []);


  return (
    <>
     <Navbar />
      <Routes>
        <Route path='/' element={ <Home post={post} />}/>
        <Route path="/details/:pid" element={<Details   />} />
      </Routes>
     
    </>
  )
}

export default App
