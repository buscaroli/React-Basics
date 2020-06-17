import React from 'react'
import { connect } from 'react-redux'


const SongDetail = ({ song }) => {
    if (!song) {
        return (
            <div>Select a Song</div>
        )
    }
    return (
        <div>
            <h1 className="header">{ song.title }</h1>
            <br />
            <h3 className="header">Duration: { song.duration }</h3>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { song: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetail)