import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SongCard from "../components/SongCard";
import Loading from "../assets/images/loader.svg";

const SearchPage = ({ spotifyApi }) => {
  const { searchTerm } = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    if (searchTerm.length) {
      let prev = spotifyApi.searchTracks(searchTerm, { limit: 50 });
      prev.then(
        function (data) {
          console.log(
            "%c SEARCH = ",
            "color: #1E90FF; font-size: 1.5rem",
            data
          );
          setData(data?.tracks?.items);
          setLoading(false);
          // clean the promise so it doesn't call abort
          prev = null;

          // ...render list of search results...
        },
        function (err) {
          console.error(err);
        }
      );
    }
  }, [searchTerm]);

  if(loading) {
    return (
      <div className="flex flex-grow justify-center items-center">
        <img src={Loading} alt="loading" />
      </div>
    )
  }

  return (
    <div className="flex flex-col text-white">
      <div className="text-3xl text-left mt-4 mb-10 tracking-wide">
        Showing results for{" "}
        <span className="font-black tracking-widest">"{searchTerm}"</span>
      </div>
      <div className=" flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((track, i) => (
          <SongCard
            key={track.id}
            track={track}
            index={i}
            // isPlaying={isPlaying}
            // activeSong={activeSong}
            data={data}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
