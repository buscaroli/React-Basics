import React from 'react'


const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        // eslint-disable-next-line no-unused-expressions
        return lat > 0 ? 'summer' : 'winter'
    }
    return lat > 0 ? 'winter' : 'summer'
}

const SeasonDisplay = props => {
    const season = getSeason(props.lat, new Date().getMonth())
    const message = season === 'summer' ? 'Gosh it\'s HOT today!' : 'Brrrr I\'m freezing here!'
    const icon = season === 'summer' ? 'sun' : 'snowflake'
    return(
        <div>
            <i className={`${icon} icon`} />
            <h1>{message}</h1>
            <i className={`${icon} icon`} />
        </div>
    )
}

export default SeasonDisplay