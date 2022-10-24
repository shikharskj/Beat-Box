import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import PlaylistSongs from "../components/PlaylistSongs";

const ArtistDetails = ({ spotifyApi }) => {
  const { id } = useParams();
  const [artistInfo, setArtistInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(null);

  useEffect(() => {
    spotifyApi.getArtist(id).then(function (data) {
      setArtistInfo(data);
    });

    setTimeout(() => {
        setLoading(false)
    }, 1000);

  }, [id]);

  useEffect(() => {
    if (artistInfo) {
      spotifyApi.searchTracks(artistInfo.name).then(
        function (data) {
          setItem({
            ...artistInfo,
            ...data,
          });
        },
        function (err) {
          console.error(err);
        }
      );
    }
  }, [artistInfo]);

  if(loading) {
    return (
      <div className="flex h-full w-full justify-center items-start">
        <Loader />
      </div>
    )
  }

  return (
    <div className="text-white flex-grow mr-5">
      <section
        className={`flex items-end space-x-7 
            bg-gradient-to-b to-[rgb(13,13,97,0)] from-white/10 h-70 md:h-60 px-8  
            bg-opacity-80 backdrop-blur-sm 
            pb-8 mt-6 rounded-md`}
      >
        <img
          className="h-40 w-40 shadow-2xl rounded-md "
          src={item?.images[1]?.url}
          alt="artist"
        />
        <div className="">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">
            {item?.name}
          </h1>
          <p> ALBUM </p>
        </div>
      </section>
      <div><PlaylistSongs item={item} spotifyApi={spotifyApi} /></div>
    </div>
  );
};

export default ArtistDetails;
