import React from 'react'


const seasonConfig = {
    summer: {
        text: 'Gosh, it\'s HOT here!',
        iconName: 'sun'
    },
    winter: {
        text: 'BRRRR, I\'m FREEZING!',
        iconName: 'snowflake'
    }
}

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        // eslint-disable-next-line no-unused-expressions
        return lat > 0 ? 'summer' : 'winter'
    }
    return lat > 0 ? 'winter' : 'summer'
}

const SeasonDisplay = props => {
    const season = getSeason(props.lat, new Date().getMonth())
    let { text, iconName } = seasonConfig[season]
    return(
        <div>
            <i className={`${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`${iconName} icon`} />
        </div>
    )
}

export default SeasonDisplay