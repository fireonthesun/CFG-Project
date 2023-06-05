import './Button.css'
import { FaHeart } from 'react-icons/fa';

const Like = () => {

    var counterValue = 0;
    const triggeredEvent = () => {
        console.log(counterValue)
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
