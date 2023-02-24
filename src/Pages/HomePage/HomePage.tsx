import React from 'react'
// import { Router } from 'react-router';
import { Routes,Route } from 'react-router-dom';
import RightSide from '../../Components/RightSide/RightSide';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Favorite from '../Favorite/Favorite';
import Playlist from '../Playlist/Playlist';
import "./HomePage.css"

const HomePage = () => {
  return (
    <div className='homeContainer'>

        <div className='left'>
            <Sidebar/>
        </div>

        <div className='right'>

            <Routes>
                <Route path="/home" element={<RightSide/>}></Route>
                <Route path="/favorite" element={<Favorite/>}></Route>
                <Route path="/playlist" element={<Playlist/>}></Route>
            </Routes>
            
        </div>

    </div>
  )
}

export default HomePage