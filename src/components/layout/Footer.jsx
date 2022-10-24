import React from 'react'

import { useSelector } from 'react-redux';
import Player from '../Player';



const Footer = ({spotifyApi}) => {
  const { accessToken } = useSelector((state) => state?.data);
  if(!accessToken) {
    return null;
  }
  return (
    <div className="fixed bottom-0 left-0 h-auto text-white bg-[#0C0F2E] w-screen">
     <Player spotifyApi={spotifyApi} />
    </div>
  )
}

export default Footer