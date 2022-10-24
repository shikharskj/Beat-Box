import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigation } from "react-feather";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";

const TopArtists = () => {
  const { topArtistsList } = useSelector((state) => state.topData.artists);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10 ">
        {" "}
        Top Artists{" "}
      </h2>
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-wrap sm:justify-start justify-center gap-8">
          {topArtistsList.map((artist, index) => (
            <Link to={`/top-artists/${artist?.id}`}>
              <div
                className="flex flex-col w-[240px] p-4 bg-white/10 
                  bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg"
              >
                <div
                  className="relative w-full h-50 group cursor-pointer"
                  // onClick={handleClick}
                >
                  <img src={artist.images[0].url} alt="artist-img" />
                </div>
                {/* Card Footer  */}
                <div className="mt-4 flex justify-between">
                  <div className="flex flex-col max-w-[160px]">
                    <p className="text-[#FCE38F] font-semibold text-lg truncate">
                      {artist?.name}
                    </p>
                    <p className="text-sm truncate text-gray-300 mt-1">
                      {artist.followers.total} followers
                    </p>
                  </div>
                  <div
                    className="flex justify-end  items-end cursor-pointer"
                    //   onClick={handleLikeSong}
                  >
                    <Navigation
                      className="bg-white/10 text-[#92C5FD] h-auto w-auto
                  rounded-full p-1.5"
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default TopArtists;
