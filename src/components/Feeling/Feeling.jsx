import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';

function Feeling() {
    const [newFeeling, setNewFeeling] = useState(0);
    const history = useHistory();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Feeling', newFeeling);
        const action = {type: 'SET_FEELING', payload: newFeeling}
        dispatch(action);
        history.push('/2');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="number" value={newFeeling} min="1" max="5" 
            onChange={(e) => setNewFeeling(e.target.value)}/>
            <button type="submit">Next</button>
        </form>
    )
}

export default Feeling;