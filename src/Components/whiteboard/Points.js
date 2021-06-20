import React from 'react'

const Points = (props) => {
    return (
        <div className="single_points">
                 <div className="points_value">
                    <p >{props.point}</p>
                 </div>
                 <div>
                    <div className="pts" >PTS</div>
                 </div>
                </div>
    )
}

export default Points
