
import React, { useState, useEffect } from 'react'

const useGetSongInfo = (spotifyApi, activeSongID) => {

    const [songInfo, setSongInfo] = useState();

    useEffect(() => {
        
        const fetchSongInfo = async () => {
            if(activeSongID) {
                const songInfo = await fetch(
                    `https://api.spotify.com/v1/tracks/${activeSongID}`,
                    {
                        headers: {
                            'Authorization': `Bearer ${spotifyApi.getAccessToken()}`,
                        }
                    }
                ).then(res => res.json())
                // .then(res => {
                //     console.log("%c RES => ", "color: blue; font-size:1.5rem", res)

                // });
    
                setSongInfo(songInfo);
            }
        }
    
        fetchSongInfo()
    }, [spotifyApi, activeSongID]);

    return songInfo;
}

export default useGetSongInfo;