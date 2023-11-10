import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';

function Comment() {
    const [newComment, setNewComment] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Comment', newComment);
        const action = {type: 'SET_COMMENT', payload: newComment}
        dispatch(action);
        // history.push('/5');
    }

    return (
        <div>
            <h3>How well are you understanding the material?</h3>
        <form onSubmit={handleSubmit}>
            <input type="text" value={newComment} onChange={(e) => setNewComment(e.target.value)}/>
            <button type="submit">Next</button>
        </form>
        </div>
    )
}


export default Comment;