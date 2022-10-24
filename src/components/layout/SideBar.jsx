import React, { useState, useEffect } from "react";
import { Grid, Disc, Users, ChevronRight, Menu, X } from "react-feather";
import logo from "../../assets/images/logo-1.gif";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentUserPlaylistID } from "../../redux/musicSlice";

const SideBar = ({ spotifyApi }) => {
  const dispatch = useDispatch();
  const [playlists, setPlaylists] = useState([]);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    spotifyApi.getUserPlaylists("314mmzqmxlxlpvgadjqk2vvm463q").then((data) => {
      console.log("user PLAYLISTS>> ", data);
      setPlaylists(data.items);
    });
  }, [spotifyApi]);

  const navLinks = (
    <div>
      <div className="flex xl:flex-row flex-col justify-start items-center mt-2 mb-4">
        <img
          src={logo}
          alt="logo"
          className="md:h-12 md:w-12 md:m-0 mb-2 h-14 rounded-full w-full "
        />
        <p className="ml-3 md:text-3xl text-md text-white mb-1">Beat-box</p>
      </div>
      <Link to="/">
        <button className="flex items-center space-x-3 text-blue-300 py-3 ml-5">
          <Grid className="h-5 w-5 text-blue-300" />
          <p className="md:text-lg">Discover</p>
        </button>
      </Link>
      <Link to="/top-artists">
        <button className="flex items-center space-x-3 text-blue-300 py-3 ml-5">
          <Users className="h-5 w-5 text-blue-300" />
          <p className="md:text-lg">Top Artists</p>
        </button>
      </Link>
      <Link to="/top-albums">
        <button className="flex items-center space-x-3 text-blue-300 py-3 ml-5">
          <Disc className="h-5 w-5 text-blue-300" />
          <p className="md:text-lg">Top Albums</p>
        </button>
      </Link>

      {/* My personal playlists */}
      <div className="flex justify-center items-center text-2xl py-4 tracking-widest text-gray-300"> 
        My Playlists 

      </div>
      {playlists?.map((playlist_item, i) => (
        <Link to="my-playlists">
          <button
            key={i}
            className="flex items-center space-x-2 text-blue-300 py-3 ml-4"
            onClick={() => dispatch(setCurrentUserPlaylistID(playlist_item.id))}
          >
            <ChevronRight className="h-5 w-5" />
            <p className="md:text-lg"> {playlist_item?.name} </p>
          </button>
        </Link>
        // </a>
      ))}
    </div>
  );

  return (
    <>
      {/* Medium screen and above side bar  */}
      <div
        className="bg-[#0b0f2e] flex flex-col text-gray-500 md:p-5 px-2 py-5
      text-xs lg:text-sm  border-r border-gray-900 space-y-4 h-screen 
      md:w-1/5 hidden md:inline-flex sticky top-1 left-1"
      >
        {navLinks}
      </div>
      {/* Mobile sidebar  */}
      <div className="absolute md:hidden block top-6 right-0 menu-icon">
        {mobileMenuOpen ? (
          <X
            className="w-6 h-6 text-white mr-2"
            onClick={() => setMobileMenuOpen(false)}
          />
        ) : (
          <Menu
            className="w-10 h-10 text-white mr-2"
            onClick={() => setMobileMenuOpen(true)}
          />
        )}
      </div>
      <div
        className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 
        to-[#483d8b] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition
        ${mobileMenuOpen ? "left-0" : "-left-full"}`}
      >
        {navLinks}
      </div>
    </>
  );
};

export default SideBar;
