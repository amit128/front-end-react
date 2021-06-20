import React from 'react'
import notify from '../../assets/icons/notify-me@3x.png'
import deposit from '../../assets/icons/money-bag@3x.png'

import Button from './Button'
const Allbutons = () => {
    return (
        <div className="buttons">
            <Button  logo={notify} title="Notify Me"/>
            <Button   logo={deposit} title="Deposit"/>
          </div>
    )
}

export default Allbutons
