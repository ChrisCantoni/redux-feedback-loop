import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';

function Support() {
    const [newSupport, setNewSupport] = useState(0);
    const history = useHistory();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Support', newSupport);
        const action = {type: 'SET_SUPPORT', payload: newSupport}
        dispatch(action);
        history.push('/4');
    }

    return (
        <div>
            <h3>How supported do you feel?</h3>
            <form onSubmit={handleSubmit}>
            <input type="number" value={newSupport} min="1" max="5" 
            onChange={(e) => setNewSupport(e.target.value)}/>
            <button type="submit">Next</button>
        </form>
        </div>
    )
}


export default Support;