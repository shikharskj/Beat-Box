import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Discover from "../../pages/Discover";
import MyPlaylists from "../../pages/MyPlaylists";
import SearchPage from "../../pages/SearchPage";
import TopAlbums from "../../pages/TopAlbums";
import TopArtists from "../../pages/TopArtists";
import AlbumDetails from "../../pages/AlbumDetails";
import SearchBar from "../SearchBar";
import TopPlay from "../TopPlay";
import ArtistDetails from "../../pages/ArtistDetails";

const Body = ({ spotifyApi }) => {
  return (
    <>
      <div 
        className="w-full flex back-gradient-blue h-screen overflow-y-scroll text-white"
      >
        <div className="pb-40 md:px-[3rem] pr-3 pl-2 pt-2 lg:min-w-[895px]">
          <SearchBar />
          <Routes>
            <Route
              exact
              path="/"
              element={<Discover spotifyApi={spotifyApi} />}
            />
            <Route
              exact
              path="/my-playlists"
              element={<MyPlaylists spotifyApi={spotifyApi} />}
            />
            <Route
              exact
              path="/top-artists"
              element={<TopArtists spotifyApi={spotifyApi} />}
            />
            <Route
              exact
              path="/top-artists/:id"
              element={<ArtistDetails spotifyApi={spotifyApi} />}
            />
            <Route
              exact
              path="/top-albums"
              element={<TopAlbums spotifyApi={spotifyApi} />}
            />
            <Route
              exact
              path="/top-albums/:id"
              element={<AlbumDetails spotifyApi={spotifyApi} />}
            />
            <Route
              exact
              path="/search/:searchTerm"
              element={<SearchPage spotifyApi={spotifyApi} />}
            />
          </Routes>
        </div>
        <div className="xl:sticky top-0 right-0 h-fit xl:flex hidden ">
          <TopPlay spotifyApi={spotifyApi} />
        </div>
      </div>
    </>
  );
};

export default Body;
