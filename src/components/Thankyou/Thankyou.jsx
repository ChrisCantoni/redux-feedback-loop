import Button from '@mui/material/Button';
import {useHistory} from 'react-router-dom';

const Thankyou = () => {

    const history = useHistory();


    function newFeedback() {
        console.log("this will be new feedback");
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