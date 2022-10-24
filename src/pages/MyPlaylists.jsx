import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentUserPlaylist } from '../redux/musicSlice'
import PlaylistSongs from '../components/PlaylistSongs'
import Loader from '../components/Loader'



const MyPlaylists = ({spotifyApi}) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true)
    const { currentUserPlaylistID, currentUserPlaylist } = useSelector(state => state.data)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000);
        spotifyApi.getPlaylist(currentUserPlaylistID).then(data => {
            dispatch(setCurrentUserPlaylist(data))
        }).catch(err => {
            console.log("Error fetching user playlist");
        })
    }, [currentUserPlaylistID]);

    if(loading) {
        return (
          <div className="flex h-full w-full justify-center items-start">
            <Loader />
          </div>
        )
    }

  return (
    <div className='text-white flex-grow mr-5'>
        {/* <header className='absolute top-5 right-8'>
            <div>
                <button className='bg-gray-800 rounded-full flex justify-center items-center p-3 backdrop-blur-sm opacity-80 hover:opacity-100 cursor-pointer'>
                    <LogOut />
                </button>

            </div>
        </header> */}
        <section className={`flex items-end space-x-7 
            bg-gradient-to-b to-[rgb(13,13,97,0)] from-white/10 h-70 md:h-60 px-8  
           bg-opacity-80 backdrop-blur-sm 
            pb-8 mt-6 rounded-md`}
        >
            <img 
                className='h-40 w-40 shadow-2xl rounded-md ' 
                src={currentUserPlaylist?.images[0]?.url} 
                alt="" 
            />
            <div className=''>
                <p>PLAYLIST</p>
                <h1 className='text-2xl md:text-3xl lg:text-5xl font-bold'>{currentUserPlaylist?.name}</h1>
            </div>
        </section>
        <div>
            <PlaylistSongs spotifyApi={spotifyApi} />
        </div>
    </div>
  )
}

export default MyPlaylists