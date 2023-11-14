import Button from '@mui/material/Button';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';

const Thankyou = () => {

    const history = useHistory();
    const dispatch = useDispatch();

    function newFeedback() {
        console.log("this will be new feedback");
        const action = {type: 'RESET'}
        dispatch(action);
        history.push('/');
    }


    return (
        <>
            <h2>Thank you!</h2>
            <Button variant="contained" onClick={newFeedback}>Leave New Feedback</Button>
        </>

    )
}


export default Thankyou;