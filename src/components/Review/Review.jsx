import {useSelector, useDispatch} from 'react-redux';
import Button from '@mui/material/Button';
import {useHistory, Link} from 'react-router-dom';
import axios from 'axios';

function Review(){


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
    }).catch((error) => {
        console.log('POST error', error);
        alert('Post went bad');
    })
  }

  return (
        <div>
            <h3>Here is a summary of your feedback:</h3>
            <h4>Feeling: {feeling}</h4>
            <h4>Understanding: {understanding}</h4>
            <h4>Support: {support}</h4>
            <h4>Comments: {comment}</h4>
            <div className="button">
            <Button variant="contained" component={Link} to="/4">Back</Button>
            <Button variant="contained" onClick={submitFeedback}>Submit</Button>
            </div>
        </div>
  )
}

export default Review;