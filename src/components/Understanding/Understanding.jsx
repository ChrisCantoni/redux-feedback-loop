import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';
import Radio from '@mui/material/Radio';
import RadioGroup, {useRadioGroup} from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';

function Understanding() {
    const [newUnderstanding, setNewUnderstanding] = useState(useSelector(store => store.understanding));
    const history = useHistory();
    const dispatch = useDispatch();

    const handleRadioChange = (e) => {
        setNewUnderstanding(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Understanding', newUnderstanding);
        const action = {type: 'SET_UNDERSTANDING', payload: newUnderstanding}
        dispatch(action);
        history.push('/support');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <FormControl>
            <FormLabel>How well are you understanding the content?</FormLabel>
            <RadioGroup row
            value={newUnderstanding}
            onChange={handleRadioChange}>

                <FormControlLabel value="1" control={<Radio />} label="1" labelPlacement="bottom"/>
                <FormControlLabel value="2" control={<Radio />} label="2" labelPlacement="bottom"/>
                <FormControlLabel value="3" control={<Radio />} label="3" labelPlacement="bottom"/>
                <FormControlLabel value="4" control={<Radio />} label="4" labelPlacement="bottom"/>
                <FormControlLabel value="5" control={<Radio />} label="5" labelPlacement="bottom"/>
            </RadioGroup>
            <br/>
            <Button variant="contained" type="submit">Next</Button>

        </FormControl>
        </form>
        </div>
    )
}


export default Understanding;