import React from 'react'
// import { Router } from 'react-router';
import { Routes,Route } from 'react-router-dom';
import PlaylistDetails from '../../Components/PlaylistDetails/PlaylistDetails';
import RightSide from '../../Components/RightSide/RightSide';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Favorite from '../Favorite/Favorite';
import Playlist from '../Playlist/Playlist';
import Search from '../Search/Search';
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
                <Route path="/favorites" element={<Favorite/>}></Route>
                <Route path="/playlists" element={<Playlist/>}></Route>
                <Route path="/search" element={<Search/>}></Route>
                <Route path="/playlist/ad" element={<PlaylistDetails/>}></Route>
            </Routes>
            
        </div>

    </div>
  )
}

export default HomePage