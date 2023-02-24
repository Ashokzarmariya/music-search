import React from 'react'
import PlaylistCard from '../PlaylistCard/PlaylistCard'
import "./UserPlaylist.css"

const UserPlaylist = () => {
  return (
    <div>
        <div className='playlist'>
            {[1,2,3,4,5,6,7,8,9,10].map(()=>  <PlaylistCard img="https://cdn.pixabay.com/photo/2015/09/17/14/24/woman-944261__340.jpg" />)}
        </div>
    </div>
  )
}

export default UserPlaylist