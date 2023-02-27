import React from 'react'
import { useNavigate } from 'react-router-dom'

const CreatePlaylistButton = () => {
    const navigate=useNavigate();

    const handleCreatePlaylist=()=>{
        navigate("/playlists")
    }

    
  return (
    <div>
        <button onClick={handleCreatePlaylist} type="button" className="btn btn-primary">Create New Playlist</button>
    </div>
  )
}

export default CreatePlaylistButton