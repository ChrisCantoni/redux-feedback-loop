import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import {useSelector} from 'react-redux';
import Radio from '@mui/material/Radio';
import RadioGroup, {useRadioGroup} from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import './Understanding.css';
import Swal from 'sweetalert2';
import { Typography } from '@mui/material';

function Understanding() {
    const [newUnderstanding, setNewUnderstanding] = useState(useSelector(store => store.understanding));
    const history = useHistory();
    const dispatch = useDispatch();

    const handleRadioChange = (e) => {
        setNewUnderstanding(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newUnderstanding === 0) {
            Swal.fire({
                title: "Oops, looks like you forgot something!",
                text: 'Please make a selection before continuing.',
                confirmButtonColor: '#E76F51'
            });
        } else {
        console.log('Understanding', newUnderstanding);
        const action = {type: 'SET_UNDERSTANDING', payload: newUnderstanding}
        dispatch(action);
        history.push('/support');
        }
    }

    return (
        <div className="fullform">
            
            <form onSubmit={handleSubmit}>
                <FormControl>
            <FormLabel>
                <Typography color="#E76F51" variant="headline" component="h2">
                How well did you understand <br /> today's content?
                </Typography>
                </FormLabel>
            <RadioGroup row
            value={newUnderstanding}
            onChange={handleRadioChange}>

                <FormControlLabel value="1" control={<Radio sx={{'&, &.Mui-checked': {color:"#E76F51"}}}/>} label="1" labelPlacement="bottom"/>
                <FormControlLabel value="2" control={<Radio sx={{'&, &.Mui-checked': {color:"#E76F51"}}}/>} label="2" labelPlacement="bottom"/>
                <FormControlLabel value="3" control={<Radio sx={{'&, &.Mui-checked': {color:"#E76F51"}}}/>} label="3" labelPlacement="bottom"/>
                <FormControlLabel value="4" control={<Radio sx={{'&, &.Mui-checked': {color:"#E76F51"}}}/>} label="4" labelPlacement="bottom"/>
                <FormControlLabel value="5" control={<Radio sx={{'&, &.Mui-checked': {color:"#E76F51"}}}/>} label="5" labelPlacement="bottom"/>
            </RadioGroup>
            <br />
            <div className="button">
            <Button variant="contained" sx={{backgroundColor:"#E76F51", ":hover":{backgroundColor:"#E76F51"}}} component={Link} to="/">Back</Button>
            <Button variant="contained" sx={{backgroundColor:"#E76F51", ":hover":{backgroundColor:"#E76F51"}}} type="submit">Next</Button>
            </div>
        </FormControl>
        </form>
        </div>
    )
}


export default Understanding;