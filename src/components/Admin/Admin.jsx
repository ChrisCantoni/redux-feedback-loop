import axios from 'axios';
import {useState, useEffect} from 'react';
import FeedbackList from '../FeedbackList/FeedbackList';
import '../FeedbackList/FeedbackList.css';

const Admin = () => {

    const [feedbackList, setFeedbackList] = useState([])

    function getFeedback() {
        axios.get('/feedback').then((response) => {
            setFeedbackList(response.data)
        }).catch((error) => {
            console.log('GET error', error)
            alert('Something went wrong, admin')
        })
    }

useEffect(() => {
    getFeedback();
}, [])

    return (
        <div className="feedbackList">
            <FeedbackList feedbackList={feedbackList} getFeedback={getFeedback}/>
        </div>
    )
}

export default Admin;