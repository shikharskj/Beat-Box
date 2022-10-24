import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import { setTopAlbumsList, setTopArtistsList } from '../redux/topAlbumsArtistsSlice'

import "swiper/swiper.min.css";
import "swiper/css/free-mode";
import { albumIds, artistIds } from "../assets/constants";

const TopPlay = ({ spotifyApi }) => {
  const dispatch = useDispatch();

  const [topAlbums, setTopAlbums] = useState(null);
  const [topArtists, setTopArtists] = useState(null);

  const TopAlbumsCard = ({ album, i }) => (
    <div className="w-[285px] flex flex-row items-center bg-white/5 py-2 p-4 rounded-lg cursor-pointer mb-2 mr-4">
      <h3 className="font-bold text-base mr-3">{i + 1}.</h3>
      <div className="flex-1 flex flex-row justify-between items-center">
        <img
          className="w-[4rem] h-[4rem] rounded-lg"
          src={album.images[0].url}
          alt="top-albums"
        />
        <div className="flex-1 flex flex-col justify-center mx-3">
          <Link to={`/top-albums/${album.id}`}>
            <p className="text-lg truncate px-2 max-w-[150px]">{album.name}</p>
            <p className="px-2 text-gray-600">{album.artists[0].name}</p>
          </Link>
        </div>
      </div>
    </div>
  );

  useEffect(() => {
    spotifyApi.getAlbums(albumIds).then(
      function (data) {
        console.log(
          "%c Several Albums => ",
          "color: red; font-size:1.5rem",
          data
        );
        setTopAlbums(data.albums);
        dispatch(setTopAlbumsList([...data.albums]));
      },
      function (err) {
        console.error(err);
      }
    );

    spotifyApi.getArtists(artistIds).then(
      function (data) {
        setTopArtists(data.artists);
        dispatch(setTopArtistsList([...data.artists]));
      },
      function (err) {
        console.error(err);
      }
    )
  }, []);

  return (
    <div className="xl:mb-0 mb-6 text-gray-400 border-l-gray-500 max-w-[300px]">
      {/* Top albums */}
      <div className="w-full flex flex-col">
        <div className="flex flex-row justify-between items-baseline pt-6 pr-4">
          <h2 className="text-2xl text-gray-400 font-bold">Top Albums</h2>
          <Link to="/top-albums">
            <p className="text-blue-300 text-sm cursor-pointer hover:underline">
              SEE ALL
            </p>
          </Link>
        </div>
        <div className="mt-4 flex flex-col gap-1 w-full overflow-hidden">
          {topAlbums?.slice(0, 5)?.map((album, i) => (
            <TopAlbumsCard key={album.id} album={album} i={i} />
          ))}
        </div>
      </div>
      {/* Top Artists  */}
      <div className="w-full flex flex-col mt-8">
        <div className="flex flex-row justify-between items-baseline mb-2 pr-4">
          <h2 className="font-bold text-2xl text-gray-400">Top Artists</h2>
          <Link to="/top-artists">
            <p className="text-blue-300 text-sm cursor-pointer hover:underline">
              SEE ALL
            </p>
          </Link>
        </div>
        <Swiper
          slidesPerView="auto"
          spaceBetween={15}
          freeMode
          centeredSlides
          centeredSlidesBounds
          modules={[FreeMode]}
          className="mt-4"
        >
          {topArtists?.slice(0, 5)?.map((artist, i) => (
            <SwiperSlide
              key={artist.id}
              style={{ width: "25%", height: "auto" }}
              className="shadow-lg rounded-full animate-slideright"
            >
              <Link to={`/top-artists/${artist.id}`}>
                <img
                  src={artist.images[0].url}
                  alt="top-artists"
                  className="rounded-full h-25 w-25 object-cover"
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TopPlay;
