import common from '../css/common.module.css'

import backArrow from '../../assets/back-arrow.png'
import powerBtn from '../../assets/switch.png'
import plus from '../../assets/plus.png'
import minus from '../../assets/minus.png'
import radio from '../../assets/radio.jpg'

const Radio = ({ selectedStation }) => {
    return (
        <div className={common.card}>
            <div className={common.top}>
                <img src={backArrow} alt="" className={common.arrow} />
                <h2>stations</h2>
                <img src={powerBtn} alt="" className={common.power} />
            </div>
            <div className={common.mid}>
                <ul>
                    <li>
                        <span>Putin FM</span>
                        <span>66,6</span>
                    </li>

                    <li>
                        <img src={minus} alt="" className={common.minus} />
                        <div style={{ width: '100px', height: '100px', borderRadius: '100%', overflow: 'hidden' }}>
                            <img src={radio} alt="" style={{ maxWidth: '100%', objectFit: 'cover' }} />
                        </div>
                        <img src={plus} alt="" className={common.plus} />
                    </li>

                    <li>
                        <span>Dribble FM</span>
                        <span>101,2</span>
                    </li>

                    <li>
                        <span>Dodge FM</span>
                        <span>99,4</span>
                    </li>
                </ul>
            </div>
            {
                selectedStation && <div className={common.bottom}>
                    <p>currently playing</p>
                    <p>{selectedStation.name}</p>
                </div>
            }
        </div>
    )
}

export default Radio