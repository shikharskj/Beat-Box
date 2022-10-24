import React, { useEffect, useState } from 'react'

import { useSelector } from 'react-redux'
import PlaylistSongs from '../components/PlaylistSongs'
import { useParams } from 'react-router-dom'
import Loader from '../components/Loader'


const AlbumDetails = ({spotifyApi}) => {
    const {id} = useParams();
    const [loading, setLoading] = useState(true)

    const item = useSelector(state => {
        const temp = state.topData.albums.topAlbumsList.filter(item => item.id === id)[0];
        return {
            ...temp,
            album: {
                images : [
                    ...temp.images
                ]
            }
        }
    });

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }, [id]);

    if(loading) {
        return (
          <div className="flex h-full w-full justify-center items-start mt-4">
            <Loader />
          </div>
        )
    }

  return (
    <div className='text-white flex-grow mr-5'>
        <section className={`flex items-end space-x-7 w-full
            bg-gradient-to-b to-[rgb(13,13,97,0)] from-white/10 h-70 md:h-60 px-8  
           bg-opacity-80 backdrop-blur-sm 
            pb-8 mt-6 rounded-md`}
        >
            <img 
                className='h-40 w-40 shadow-2xl rounded-md ' 
                src={item?.images[1]?.url} 
                alt="" 
            />
            <div className='max-w-[400px] truncate'>
                <h1 className='text-2xl md:text-3xl lg:text-5xl font-bold'>{item?.name}</h1>
                <p> ALBUM </p>
            </div>
        </section>
        <div>
            <PlaylistSongs item={item} spotifyApi={spotifyApi} />
        </div>
    </div>
  )
}

export default AlbumDetails