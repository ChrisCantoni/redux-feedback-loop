import FeedbackItem from '../FeedbackItem/FeedbackItem';
import './FeedbackList.css';
import FlagIcon from '@mui/icons-material/Flag';

const FeedbackList = (props) => {

    return (
        <div className='feedbackTable'>
        <table>
            <thead>
                <tr>
                    <th colSpan="8">Admin</th>
                </tr>
                <tr>
                    <th>ID</th>
                    <th>Feeling</th>
                    <th>Understanding</th>
                    <th>Support</th>
                    <th>Comments</th>
                    <th><FlagIcon/></th>
                    <th>Date submitted</th>
                    <th>Delete?</th>
                </tr>
            </thead>
            <tbody>
            {props.feedbackList.map((item) => {
              return <FeedbackItem key={item.id} item={item} getFeedback={props.getFeedback}/>
            })}
            </tbody>
        </table>
        </div>
    )
}

export default FeedbackList;