import Button from '@mui/material/Button';
import axios from 'axios';

const FeedbackItem = (props) => {

    const deleteFeedback = () => {
        axios.delete(`/feedback/${props.item.id}`)
        .then((response) => {
            props.getFeedback();
        }).catch((error) => {
            console.error('DELET error', error);
            alert('Feedback could not be deleted');
        })
    }

    const toggleFlag = () => {
        axios.put(`/feedback/${props.item.id}`)
        .then((response) => {
            props.getFeedback();
        }).catch((error) => {
            console.error(`Can't flag that feedback`, error);
            alert('Something went wrong flagging that');
        })
    }



    return (
        <>
            <tr>
                <td>{props.item.id}</td>
                <td>{props.item.feeling}</td>
                <td>{props.item.understanding}</td>
                <td>{props.item.support}</td>
                <td>{props.item.comments}</td>
                <td><Button variant="contained" onClick={toggleFlag}>{props.item.flagged ? 'Flagged' : 'Not flagged'}</Button></td>
                <td>{props.item.date}</td>
                <td><Button variant="contained" onClick={deleteFeedback}>Delete</Button></td>
            </tr>
        </>
    )
}

export default FeedbackItem;