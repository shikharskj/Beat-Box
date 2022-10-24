import React from "react";
import { PauseCircle, PlayCircle } from "react-feather";



const PlayPause = ({ activeSong, isPlaying, track, handlePause, handlePlay }) =>
  true && activeSong?.name === track.name ? (
    <PauseCircle 
      size="35px"
      className={activeSong?.name === track.name ? 'text-[#FF0000]' : 'text-gray-300'}
      // color={activeSong?.name === track.name  ? 'FF0000' : 'white' }
      // onClick={handlePause}
    />
  ) : (
    <PlayCircle 
      size="35px"
      className={activeSong?.name === track.name ? 'text-[#FF0000]' : 'text-gray-300'}
      // color={activeSong?.name !== track.name  ? 'FF0000' : 'white' }
      // onClick={handlePlay}
    />
  );

export default PlayPause;
