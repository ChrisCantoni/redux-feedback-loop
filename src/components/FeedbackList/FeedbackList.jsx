import FeedbackItem from '../FeedbackItem/FeedbackItem';
import './FeedbackList.css';

const FeedbackList = (props) => {

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Feeling</th>
                    <th>Understanding</th>
                    <th>Support</th>
                    <th>Comments</th>
                    <th>Flag?</th>
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
    )
}

export default FeedbackList;