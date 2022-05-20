import common from '../css/common.module.css'
import backArrow from '../../assets/back-arrow.png'
import powerBtn from '../../assets/switch.png'

const stations = [
    { name: 'Putin FM', num: '666' },
    { name: 'Dribble FM', num: '1012' },
    { name: 'Dodge FM', num: '994' },
    { name: 'Ballads FM', num: '871' },
    { name: 'Maximum FM', num: '1422' },
]

const Card = ({ setSelectedStation }) => {

    return (
        <div className={common.card}>
            <div className={common.top}>
                <img src={backArrow} alt="" className={common.arrow} />
                <h2>stations</h2>
                <img src={powerBtn} alt="" className={common.power} />
            </div>
            <div className={common.mid}>
                <ul>
                    {
                        stations.map(({ name, num }) => {
                            return (
                                <li key={name} onClick={() => setSelectedStation({ name, num })}>
                                    <span>{name}</span>
                                    <span>{[num.slice(0, -1), ',', num.slice(-1)].join('')}</span>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className={common.bottom}></div>
        </div>
    )
}

export default Card