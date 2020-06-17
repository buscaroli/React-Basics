import { combineReducers } from 'redux'


const songsReducer = () => {
    return [
        { title: 'Smells like Teen Spirit', duration: '4:00' },
        { title: 'Fear of the Dark', duration: '5:10' },
        { title: 'Sweet Child O\'Mine', duration: '5:50' },
        { title: 'Over the Rainbow', duration: '4:30' }
    ]
}

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload
    }
    return selectedSong
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})