import axios from 'axios';
import {useState, useEffect} from 'react';
import FeedbackList from '../FeedbackList/FeedbackList';

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
        <>
        {JSON.stringify(feedbackList)}
        <FeedbackList feedbackList={feedbackList} getFeedback={getFeedback}/>
        </>
    )
}

export default Admin;