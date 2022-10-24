import React from "react";
import { useDispatch } from "react-redux";
import { Heart } from 'react-feather'
import { setActiveSong, setActiveSongId } from "../redux/musicSlice";
import PlayPause from "./PlayPause";

const SongCard = ({ track, i, activeSong, isPlaying, data, spotifyApi }) => {
  const dispatch = useDispatch();

  // const handlePauseClick = () => {};
  const handlePlayClick = () => {
    dispatch(setActiveSong(track));
    dispatch(setActiveSongId(track?.id));
  };

  const handleClick = () => {
    handlePlayClick();
  };

  const handleLikeSong = () => {
  }


  return (
    <div
      className="flex flex-col w-[240px] p-4 bg-white/10 
        bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg"
    >
      <div className="relative w-full h-50 group cursor-pointer" onClick={handleClick}>
        <div
          className={`absolute inset-0 justify-center 
                items-center bg-black bg-opacity-50 group-hover:flex
                ${
                  activeSong?.title === track.name
                    ? "flex bg-black bg-opacity-80"
                    : "hidden"
                }`}
        >
          <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            track={track}
            // handlePause={handlePauseClick}
            // handlePlay={handlePlayClick}
          />
        </div>
        <img src={track?.album?.images[1].url} alt="song_img" />
      </div>
      {/* Card Footer  */}
      <div className="mt-4 flex">
        <div className="flex flex-col flex-grow flex-4 max-w-[180px]">
          <p className="text-[#FCE38F] font-semibold text-lg truncate">
            {track?.name}
          </p>
          <p className="text-sm truncate text-gray-300 mt-1">
            {track?.artists?.[0].name}
          </p>
        </div>
        <div className="flex justify-center items-end cursor-pointer" onClick={handleLikeSong}>
            <Heart />
        </div>
      </div>
    </div>
  );
};

export default SongCard;
