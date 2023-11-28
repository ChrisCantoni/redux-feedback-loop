import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {useHistory, Link} from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

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
        <form onSubmit={handleSubmit}>
        <Typography color="#E76F51" variant="headline" component="h2">
                Would you like to add additional comments?            
            </Typography>
            <TextField variant="filled" sx={{width: {sm:200, md:350}, input: {color: '#E76F51'}}} placeholder="Comments are entirely optional" 
            value={newComment} onChange={(e) => setNewComment(e.target.value)} multiline minRows={4} 
            size="medium" />
            <br/>
            <br/>
            <div className="button">
            <Button variant="contained" sx={{backgroundColor:"#E76F51", ":hover":{backgroundColor:"#E76F51"}}} component={Link} to="/support">Back</Button>
            <Button variant="contained" sx={{backgroundColor:"#E76F51", ":hover":{backgroundColor:"#E76F51"}}} type="submit">Next</Button>
            </div>
        </form>
        </div>
    )
}


export default Comment;