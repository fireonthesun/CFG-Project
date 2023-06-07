import './Button.css'
import { FaHeart } from 'react-icons/fa';

const Like = () => {

    var counterValue = 1;
    const triggeredEvent = () => {
        console.log("Paris has " + counterValue + " like(s)")
        counterValue++;
    }
    return (
        <button className="Like" onClick={triggeredEvent}>
            <h2>
                <FaHeart/>
            </h2>
        </button>
    );
}

export default Like;
