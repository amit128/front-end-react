import React from 'react'

const Players = (props) => {
    return (
        <div className="player_headshot">
                <img src={props.pic} alt="player"/>
                <p className="player_name">JAMES</p>
                </div>
    )
}

export default Players
