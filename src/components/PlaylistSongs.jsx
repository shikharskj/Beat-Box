import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {millisToMinutesAndSeconds} from '../helpers/songDuration'
import { setActiveSongId, setIsPlaying } from "../redux/musicSlice";


const PlaylistSongs = ({ spotifyApi, item }) => {
  const { currentUserPlaylist, isPlaying, activeSongID } = useSelector((state) => state.data);
  const dispatch = useDispatch()


  const playSong = (track) => {
    console.log("INSIDE PLAY...res")
    dispatch(setActiveSongId(track.track.id));
    dispatch(setIsPlaying(true));
    spotifyApi.play({
        uris: [track.track.uri],
    })
  }

  const playArtistOrAlbumSong = (track) => {
    console.log("INSIDE PLAY...res")
    dispatch(setActiveSongId(track.id));
    dispatch(setIsPlaying(true));
    spotifyApi.play({
        uris: [track.uri],
    })
  }

  if(item?.name) {
    console.log("item =", item)
    return (
      <div className="text-gray-400 px-2 flex flex-col items-start mt-4 space-y-4 pb-28">
      {item?.tracks?.items?.map((track, i) => (
        <div className="w-full flex justify-between items-center py-2 px-3
        hover:bg-white/5 hover:bg-opacity-80 hover:backdrop-blur-sm 
        hover:animate-slideup rounded-lg hover:cursor-pointer"
        onClick={() => playArtistOrAlbumSong(track)}
        >
          <div
            key={track.id}
            className="flex items-center justify-center space-x-4"
          >
            <p className="pr-3">{i + 1}</p>
            <img
              className="h-10 w-10 "
              src={track?.album?.images[0].url || item.images[2].url}
              alt="song"
            />
            <div>
              <p className="w-36 lg:w-64 text-white truncate">{track.name}</p>
              <p>{track.artists[0].name}</p>
            </div>
          </div>
          <div className="flex items-center justify-between ml-auto hidden md:inline-flex">
            <p>{millisToMinutesAndSeconds(track.duration_ms)}</p>
          </div>
        </div>
      ))}
    </div>
    )
  }

  return (
    <div className="text-gray-400 px-2 flex flex-col items-start mt-4 space-y-4 pb-28">
      {currentUserPlaylist?.tracks?.items?.map((track, i) => (
        <div className="w-full flex justify-between items-center py-2 px-3
        hover:bg-white/5 hover:bg-opacity-80 hover:backdrop-blur-sm 
        hover:animate-slideup rounded-lg hover:cursor-pointer"
        onClick={() => playSong(track)}
        >
          <div
            key={track.track.id}
            className="flex items-center justify-center space-x-4"
          >
            <p className="pr-3">{i + 1}</p>
            <img
              className="h-10 w-10 "
              src={track.track.album.images[0].url}
              alt="song"
            />
            <div>
              <p className="w-36 lg:w-64 text-white truncate">{track.track.name}</p>
              <p>{track.track.artists[0].name}</p>
            </div>
          </div>
          <div className="flex items-center justify-between ml-auto hidden md:inline-flex">
            <p>{millisToMinutesAndSeconds(track.track.duration_ms)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlaylistSongs;
