import { createSlice } from "@reduxjs/toolkit";

const albumsArtistsSlice = createSlice({
    name: "albumsArtists",
    initialState: {
        albums: {
            topAlbumsList: [],
            currentTopAlbum: null,
            currentTopAlbumId: null,
        },
        artists: {
            topArtistsList: [],
            currentTopArtist: null,
            currentTopArtistId: null,
        },
        likes: {
            myLikedSongs: []
        }
    },
    reducers: {
        setTopAlbumsList: (state, action) => {
            state.albums.topAlbumsList = action.payload;
        },
        setTopArtistsList: (state, action) => {
            state.artists.topArtistsList = action.payload;
        },
        setCurrentTopAlbumAndId: (state, action) => {
            state.albums.currentTopAlbum = action.payload.album;
            state.albums.currentTopAlbumId = action.payload.id;
        },
        setCurrentTopArtistAndId: (state, action) => {
            state.artists.currentTopArtist = action.payload.artist;
            state.artists.currentTopArtistId = action.payload.id;
        },
        setMyLikedSongs: (state, action) => {
            state.likes.myLikedSongs = action.payload;
        }
    }
});

export const {
    setTopAlbumsList,
    setTopArtistsList,
    setCurrentTopAlbumAndId,
    setCurrentTopArtistAndId,
    setMyLikedSongs
} = albumsArtistsSlice.actions;

export default albumsArtistsSlice.reducer;

