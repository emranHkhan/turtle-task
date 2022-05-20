import { useState } from 'react'
import lightOn from '../assets/pic_bulbon.gif'
import lightOff from '../assets/pic_bulboff.gif'

const Bulb = () => {
    const [isOn, setIsOn] = useState(false)
    return (
        <div>
            <img src={isOn ? lightOn : lightOff} alt="" onClick={() => setIsOn(!isOn)} />
        </div>
    )
}

export default Bulb