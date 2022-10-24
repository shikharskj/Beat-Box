import React, { useEffect, useState } from "react";

import { genres, sections } from "../assets/constants";
import SongCard from "../components/SongCard";
import Loader from "../components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "react-feather";
const Discover = ({ spotifyApi }) => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.data);
  const [genre, setGenre] = useState(genres[0].value);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleGenreChange = (e) => {
    const { value } = e.target;
    setLoading(true);
    setGenre(value);
  };

  useEffect(() => {
    spotifyApi.getMySavedTracks().then(
      function (data) {
        console.log(
          "%c getMySavedTracks = ",
          "color: lime; font-size:1.5rem",
          data
        );
      },
      function (err) {
        console.error(err);
      }
    );

    spotifyApi.searchTracks(genre, { limit: 50 }).then(
      function (res) {
        setTimeout(() => {
          console.log(`Search by ${genre}`, res);
          setData([...res?.tracks?.items]);
          setLoading(false);
        }, 1000);
      },
      function (err) {
        console.error(err);
      }
    );
  }, [genre]);

  return (
    <>
      <div className="flex flex-row flex-grow justify-between align-center gap-3 pr-4">
        <p className="text-2xl lg:text-4xl flex items-center font-bold text-white md:m-0 m-auto">
          <Box className="mr-4 h-10 w-10" />
          Discover
        </p>
        <select
          onChange={handleGenreChange}
          value={genre}
          className="px-2 pt-1 pb-1.5 outline-none text-sm rounded-md bg-white/20"
        >
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>

      {loading ? (
        <div className="flex justify-center items-start w-full h-full">
          <Loader />
        </div>
      ) : (
        <div className="text-white pt-8">
          {/* <div className="text-3xl pb-6 flex justify-center lg:block">
            {
              genres?.map((item) => {
                if(item.value === genre) {
                  return item.title;
                }
              })
            }
          </div> */}
          <div className=" flex flex-wrap sm:justify-start justify-center gap-8">
            {data?.map((track, i) => (
              <SongCard
                key={track.id}
                track={track}
                index={i}
                isPlaying={isPlaying}
                activeSong={activeSong}
                data={data}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Discover;
