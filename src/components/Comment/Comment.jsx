import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Comment() {
    const [newComment, setNewComment] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Comment', newComment);
        const action = {type: 'SET_COMMENT', payload: newComment}
        dispatch(action);
        history.push('/review');
    }

    return (
        <div>
            <h3>Would you like to add additional comments?</h3>
        <form onSubmit={handleSubmit}>
            <TextField variant="filled" placeholder="Comments are entirely optional" 
            value={newComment} onChange={(e) => setNewComment(e.target.value)} multiline minRows={4} 
            size="medium" sx={{width: {sm:200, md:300}}}/>
            <br/>
            <Button variant="contained" type="submit">Next</Button>
        </form>
        </div>
    )
}


export default Comment;