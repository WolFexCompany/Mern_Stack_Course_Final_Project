import React from "react";
import Home from "./Website_Pages/Home";
import Blogs from "./Website_Pages/Blogs";
import Contactus from "./Website_Pages/Contact";
import PostDetail from "./Website_Components/PostDetail";
import Dashboard from "./Web_App_Pages/Dashboard";
import MyBlogs from "./Web_App_Pages/MyBlogs";
import Comments from "./Web_App_Pages/Comments";
import Help from "./Web_App_Pages/Help_Desk.jsx";
import MyProfile from "./Web_App_Pages/MyProfile";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { useState } from "react";


function App() {
  const [single_post_info,updateinfo]=useState([])
  return<>
  <BrowserRouter>
  <Routes>
    <Route index element={<Home/>}/> 
    <Route path="/Blogs" element={<Blogs single_post={updateinfo}/>}/>
    <Route path="/Contact_us" element={<Contactus/>}/>
    <Route path="/Post_Detail" element={<PostDetail single_post_info={single_post_info}/>}/>
    <Route path="/Dashboard" element={<Dashboard/>}/>
    <Route path="/MyBlogs" element={<MyBlogs/>}/>
    <Route path="/MyProfile" element={<MyProfile/>}/>
    <Route path="/Comments" element={<Comments/>}/>
    <Route path="/Help_Desk" element={<Help/>}/>
     </Routes>
  </BrowserRouter>
  
  

  
  </>
}

export default App;
