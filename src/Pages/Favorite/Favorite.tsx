import React from 'react'
import FavoriteSong from '../../Components/FavoriteSong/FavoriteSong'
import "./Favorite.css"


const Favorite = () => {
  const songs=[{title:"aaa",album:"bbbb",duration:"10 hours"}]
  return (
    <div>
      <div>
        <h1 className='favoritesSong'>My Favorite Songs</h1>
      </div>
      <div>
        <FavoriteSong data={songs}/>
      </div>
        
    </div>
  )
}

export default Favorite