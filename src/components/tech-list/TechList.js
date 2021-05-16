import './TechList.css';
import TechListData from './TechListData';

const TechList = () => (
    <ul className="TechList">
        {TechListData.map((item, index) => {
            return (
                <li className='TechItem' key={index}>{item}</li>
            )
        })}
    </ul>
)

export default TechList;