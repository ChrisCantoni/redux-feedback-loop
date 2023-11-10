import {useSelector, useDispatch} from 'react-redux';

function Review(){


  const feeling = useSelector(store => store.feeling);
  const understanding = useSelector(store => store.understanding);
  const support = useSelector(store => store.support);
  const comment = useSelector(store => store.comment);


  return (
        <div>
            <h3>Here is a summary of your feedback:</h3>
            <h4>Feeling: {feeling}</h4>
            <h4>Understanding: {understanding}</h4>
            <h4>Support: {support}</h4>
            <h4>Comments: {comment}</h4>

            <button>Submit</button>
        </div>
  )
}

export default Review;