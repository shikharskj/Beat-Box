import { configureStore } from '@reduxjs/toolkit'
import musicReducer from './musicSlice'
import albumsArtistsReducer from './topAlbumsArtistsSlice'

const store = configureStore({
  reducer: {
    data: musicReducer,
    topData: albumsArtistsReducer,
  }
})

export default store;

