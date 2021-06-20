import React from 'react'
const Button = (props) => {
    return (
        
            <div className=" button">
                <div>
               <img src={props.logo} height="20px;"  alt=""/>
               </div>
               <div className="msg"><p> {props.title}</p>
               </div>
              </div>
    
    )
}

export default Button
