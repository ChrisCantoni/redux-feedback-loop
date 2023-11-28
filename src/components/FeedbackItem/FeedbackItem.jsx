import Button from '@mui/material/Button';
import axios from 'axios';
import FlagIcon from '@mui/icons-material/Flag';
import EmojiFlagIcon from '@mui/icons-material/EmojiFlags';
import Swal from 'sweetalert2';

const FeedbackItem = (props) => {

    const deleteFeedback = () => {
        Swal.fire({
            title: 'Delete!',
            text: 'Are you sure you want to delete this entry? This action cannot be undone.',
            icon: 'error',
            iconColor: '#E76F51',
            showCancelButton: true,
            cancelButtonColor: '#264653',
            confirmButtonColor: '#E76F51',
            confirmButtonText: 'Yes, delete this'
          }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`/feedback/${props.item.id}`)
                .then((response) => {
                    props.getFeedback();
                }).catch((error) => {
                    console.error('DELETE error', error);
                    alert('Feedback could not be deleted');
                })
            }
          })
        // TODO: Add pop-up to confirm deletion

        
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

    // Convert SQL date formate to YYYY-MM-DD
    let date = new Date(props.item.date).toISOString().split('T')[0];

    return (
        <>
            <tr>
                <td>{props.item.id}</td>
                <td>{props.item.feeling}</td>
                <td>{props.item.understanding}</td>
                <td>{props.item.support}</td>
                <td>{props.item.comments}</td>
                <td><Button variant="contained" sx={{backgroundColor:"#E76F51", ":hover":{backgroundColor:"#E76F51"}}} onClick={toggleFlag}>{props.item.flagged ? <FlagIcon sx={{}}/> 
                : <EmojiFlagIcon sx={{color:"#E76F51", ":hover":{backgroundColor: "#E76F51"}}}/>}</Button></td>
                <td>{date}</td>
                <td><Button variant="contained" onClick={deleteFeedback}>Delete</Button></td>
            </tr>
        </>
    )
}

export default FeedbackItem;