import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';

function Understanding() {
    const [newUnderstanding, setNewUnderstanding] = useState(0);
    const history = useHistory();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Understanding', newUnderstanding);
        const action = {type: 'SET_UNDERSTANDING', payload: newUnderstanding}
        dispatch(action);
        history.push('/3');
    }

    return (
        <div>
            <h3>How well are you understanding the material?</h3>
            <form onSubmit={handleSubmit}>
            <input type="number" value={newUnderstanding} min="1" max="5" 
            onChange={(e) => setNewUnderstanding(e.target.value)}/>
            <button type="submit">Next</button>
        </form>
        </div>
    )
}


export default Understanding;