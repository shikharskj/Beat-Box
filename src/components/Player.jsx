import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useGetSongInfo from "../hooks/useGetSongInfo";
import { setActiveSongId, setIsPlaying } from "../redux/musicSlice";
import SpotifyPlayer from "react-spotify-web-playback";
const Player = ({ spotifyApi }) => {
  const dispatch = useDispatch();
  const { activeSongID, activeSong, isPlaying } = useSelector(
    (state) => state.data
  );
  const [songInfo, setSongInfo] = useState(null);

  // const fetchMyCurrentPlayingTrack = () => {
  //   if (!songInfo) {
  //     spotifyApi.getMyCurrentPlayingTrack().then((data) => {
  //       console.log("Now playing = ", data);
  //       dispatch(setActiveSongId(data?.item?.id));

  //       spotifyApi.getMyCurrentPlaybackState().then((data) => {
  //         dispatch(setIsPlaying(data?.is_playing));
  //       });
  //     });
  //   }
  // };

  useEffect(() => {
    // if (!activeSongID) {
    //   fetchMyCurrentPlayingTrack();
    // }
    // console.log("_songInfo = ", songInfo);
    spotifyApi.getTrack(activeSongID).then(
      function (data) {
        console.log('Album information', data);
        setSongInfo(data)
      },
      function (err) {
        console.error("ERROR in fetching songs from Spotify : ", err);
      }
    )
  }, [spotifyApi, activeSongID]);

  return (
    // <div
    //   className="backdrop-blur-sm animate-slideup rounded-md text-white
    //   bg-gradient-to-b to-[#0C0F2E] from-white/10
    //   grid grid-cols-3 text-xs md:text-base md:px-8"
    // >
    //   {/* left  */}
    //   {/* <div className='mt-[1.5] py-2 px-4 flex items-center space-x-4'>
    //       <img
    //         className='h-10 w-10 md:h-10 md:w-10 inline'
    //         src={_songInfo?.album.images?.[0]?.url}
    //         alt="song_info"
    //       />
    //       <div>
    //         <h3>{_songInfo?.name}</h3>
    //         <p>{_songInfo?.artists?.[0]?.name}</p>
    //       </div>
    //     </div> */}

    //   ;
    // </div>
    <>
      {/* <div></div> */}
      {console.log("songInfo in return >>>>> ", songInfo)}
      <SpotifyPlayer
        token={spotifyApi.getAccessToken()}
        showSaveIcon={true}
        magnifySliderOnHover={true}
        play={songInfo?.uri}
        uris={[songInfo?.uri]}
        styles={{
          bgColor: "#0C0F2E",
          activeColor: "#FFFFFF",
          altColor: '#FF0000',
          height: '64px',
          loaderColor: '#FFFFFF',
          sliderColor: '#000000',
          sliderHandleColor: '#FF0000', //FF0000
          sliderTrackColor:'#6A707F', 
          trackNameColor: '#FFFFFF',
          trackArtistColor: '#FFFFFF',
          color: '#CECEDA',
        }}
      />
    </>
  );
};

export default Player;
