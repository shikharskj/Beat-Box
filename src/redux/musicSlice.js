import { createSlice } from "@reduxjs/toolkit";

const musicSlice = createSlice({
  name: "music",
  initialState: {
    // make it null after finished
    accessToken: null,
    // accessToken: 'BQAC8odZ_mTg_JSCcVvfaB7OUAMKbJdsqt7FG6lVGPBBvsXayanqkE33cqIjk7rmJnZVAlinSX3QSra2dRbSzFi2Ng6ZQOyicuRfUyGd_iPHuaF3MzXtmcTnkWSgyY_WQr7Mq_rvjUFOZXI8s5DMBLoYaORNs9LTddfHMs57p0VdFh',
    user: null,
    // playlists: [],
    isActive: false,
    isPlaying: false,
    // topAlbums: [],
    // activeTopAlbum: null,
    activeSong: null,
    activeSongID: null,
    currentSongList: [],
    currentIndex: 0,
    currentUserPlaylistID: null,
    currentUserPlaylist: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setToken: (state, action) => {
      state.accessToken = action.payload;
    },
    // setActiveSong: (state, action) => {
    //   state.activeSong = action.payload.track;
    //   if (action.payload?.data) {
    //     state.currentSongList = action.payload.data;
    //   }
    //   if (action.payload?.index) {
    //     state.currentIndex = action.payload.index;
    //   }
    // },
    setCurrentUserPlaylistID: (state, action) => {
      state.currentUserPlaylistID = action.payload;
    },
    setCurrentUserPlaylist: (state, action) => {
      state.currentUserPlaylist = action.payload;
    },
    setActiveSong: (state, action) => {
      state.activeSong = action.payload;
    },
    setActiveSongId: (state, action) => {
      state.activeSongID = action.payload;
    },
    setIsPlaying: (state, action) => {
        state.isPlaying = action.payload;
    }
  },
});

export const {
  setUser,
  setToken,
  setCurrentUserPlaylistID,
  setCurrentUserPlaylist,
  setActiveSong,
  setActiveSongId,
  setIsPlaying,
  nextSong,
  prevSong,
  playPause,
} = musicSlice.actions;

export default musicSlice.reducer;
