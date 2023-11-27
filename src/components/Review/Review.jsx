import {useSelector, useDispatch} from 'react-redux';
import Button from '@mui/material/Button';
import {useHistory, Link} from 'react-router-dom';
import axios from 'axios';
import { Typography } from '@mui/material';
import '../Understanding/Understanding.css';

function Review(){

    const history = useHistory();

  const feeling = useSelector(store => store.feeling);
  const understanding = useSelector(store => store.understanding);
  const support = useSelector(store => store.support);
  const comment = useSelector(store => store.comment);


  function submitFeedback() {
    console.log('feedback link')
    axios.post('/feedback', {
        feeling: feeling,
        understanding: understanding,
        support: support,
        comments: comment
    }).then((response) => {
        console.log('POST successful');
        history.push('/thankyou')
    }).catch((error) => {
        console.log('POST error', error);
        alert('Post went bad');
    })
  }

  return (
        <>
            <div className="feedback">
            <Typography color="primary">
            <h2>Here's a summary of your feedback:</h2>
            <h3>Feeling: {feeling}</h3>
            <h3>Understanding: {understanding}</h3>
            <h3>Support: {support}</h3>
            <h3>Comments: {comment}</h3>
            <br/>
            </Typography>
            </div>
            <div className="button">
            <Button variant="contained" component={Link} to="/comment">Back</Button>
            <Button variant="contained" onClick={submitFeedback}>Submit</Button>
            </div>
        </>
  )
}

export default Review;