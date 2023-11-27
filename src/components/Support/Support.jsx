import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {useHistory, Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';

function Support() {
    const [newSupport, setNewSupport] = useState(useSelector(store => store.support));
    const history = useHistory();
    const dispatch = useDispatch();

    const handleRadioChange = (e) => {
        setNewSupport(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Support', newSupport);
        const action = {type: 'SET_SUPPORT', payload: newSupport}
        dispatch(action);
        history.push('/comment');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <FormControl>
            <FormLabel>How supported do you feel?</FormLabel>
            <RadioGroup row
            value={newSupport}
            onChange={handleRadioChange}>

                <FormControlLabel value="1" control={<Radio />} label="1" labelPlacement="bottom"/>
                <FormControlLabel value="2" control={<Radio />} label="2" labelPlacement="bottom"/>
                <FormControlLabel value="3" control={<Radio />} label="3" labelPlacement="bottom"/>
                <FormControlLabel value="4" control={<Radio />} label="4" labelPlacement="bottom"/>
                <FormControlLabel value="5" control={<Radio />} label="5" labelPlacement="bottom"/>
            </RadioGroup>
            <br/>
            <div className="button">
            <Button variant="contained" component={Link} to="/understanding">Back</Button>
            <Button variant="contained" type="submit">Next</Button>
            </div>

        </FormControl>
        </form>
        </div>
    )
}


export default Support;