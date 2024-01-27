import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'

import { useEffect } from 'react'
import axios from 'axios'
import Details from './componets/Details'
import Navigation from './componets/Navigation'
import Card from './componets/Card'

function App() {
  const [post, setPost] = useState([]);
  

  useEffect(() => {
    axios.get("http://localhost:4000/user/posts").then((res) => {
      setPost(res.data.allpost);
      console.log(res.data.allpost);
    })
  }, []);


  return (
    <>
     <Navigation />
      <Routes>
        {/* <Route path='/' element={ <Home post={post} />}/> */}
        <Route path="/details/:pid" element={<Details   />} />
        {/* <Route path="/:category?"  element={ <Card post={post} />} /> */}

        <Route path="/:category?"  element={ <Home post={post} />} />
      </Routes>
     
    </>
  )
}

export default App
