import React from 'react'
import FavoriteSong from '../FavoriteSong/FavoriteSong'
import "./PlaylistDetails.css"
import {useNavigate} from "react-router-dom";

const PlaylistDetails = () => {
    const songs=[{title:"aaa",album:"bbbb",duration:"10 hours"}];
    const navigate=useNavigate();
    const handleNavigate=(value:number)=>{
navigate(value);
    }
  return (
    <div>
        <div className='my-2 d-flex'>
            <i onClick={()=>handleNavigate(-1)} className="chevron fas fa-chevron-left leftChevron"></i>
            {/* <i onClick={()=>handleNavigate(1)} className="chevron fas fa-chevron-right"></i> */}
        </div>

        <div className='playlistHeader'>
            <img className='playlistImage' src="https://tse1.mm.bing.net/th?id=OIP.Ca267I3Q9gI-IH26eXPLVQHaEK&pid=Api&P=0" alt="" />
            <div>
                <h5>Playlist</h5>
                <h1 className='playlistName my-4'>Playlist Name</h1>
                <p className='opacity-25'>Description</p>
                <p className='mt-2'> <span className='username'>Username</span> <span className='username'>5 song</span> <span className='opacity-25'>7 min 37 sec</span></p>
            </div>
            
        </div>

        <div className='plsylistSongs mt-5'>

            <FavoriteSong data={songs}/>

        </div>
    </div>
  )
}

export default PlaylistDetails