import React from 'react'
import DAVIS from '../../assets/headshots/Anthony.png';
import james from '../../assets/headshots/James.png';
import GORDON from '../../assets/headshots/AaronGordonPLP59D7092156491v2.png';
import SIAKAM from '../../assets/headshots/Siakam.png';
import LEONARD from '../../assets/headshots/Leonard.png';
import LOWRY from '../../assets/headshots/Lowry.png';
import RUSSEL from '../../assets/headshots/Russell.png';

import Players from './Players';
const Allplayers = () => {
    return (
        <div className="Allplayers" >
          <Players name='JAMES' pic={james}/>
          <Players name='DAVIS' pic={DAVIS}/>
          <Players name='GORDON' pic={GORDON}/>
          <Players name='SIAKAM' pic={SIAKAM}/>
          <Players name='LEONARD' pic={LEONARD}/>
          <Players name='LOWRY' pic={LOWRY}/>
          <Players name='RUSSEL' pic={RUSSEL}/>
       </div>
    )
}

export default Allplayers
