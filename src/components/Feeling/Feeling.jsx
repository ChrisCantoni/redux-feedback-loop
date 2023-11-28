import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {useHistory, Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import Radio from '@mui/material/Radio';
import RadioGroup, {useRadioGroup} from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import Swal from 'sweetalert2';
import { Typography } from '@mui/material';

function Feeling() {
    const [value, setValue] = useState(useSelector(store => store.feeling));
    const history = useHistory();
    const dispatch = useDispatch();

    const handleRadioChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        // TODO: Add pop-up to require selection
        e.preventDefault();
        if (value === 0) {
            Swal.fire({
                title: "Oops, looks like you forgot something!",
                text: 'Please make a selection before continuing.',
                confirmButtonColor: '#E76F51'
            });
        } else {
        console.log('Feeling', value);
        const action = {type: 'SET_FEELING', payload: value}
        dispatch(action);
        history.push('/understanding');
        }
    }

    return (
    <div>
        <form onSubmit={handleSubmit}>
            <FormControl>
                <FormLabel>
                    <Typography color="#E76F51" variant="headline" component="h2">
                    How are you feeling today?
                        </Typography></FormLabel>
                    <RadioGroup row
                    value={value}
                    onChange={handleRadioChange}>
                       <FormControlLabel value="1" control={<Radio sx={{'&, &.Mui-checked': {color:"#E76F51"}}}/>} label="1" labelPlacement="bottom"/>
                        <FormControlLabel value="2" control={<Radio sx={{'&, &.Mui-checked': {color:"#E76F51"}}}/>} label="2" labelPlacement="bottom"/>
                        <FormControlLabel value="3" control={<Radio sx={{'&, &.Mui-checked': {color:"#E76F51"}}}/>} label="3" labelPlacement="bottom"/>
                        <FormControlLabel value="4" control={<Radio sx={{'&, &.Mui-checked': {color:"#E76F51"}}}/>} label="4" labelPlacement="bottom"/>
                        <FormControlLabel value="5" control={<Radio sx={{'&, &.Mui-checked': {color:"#E76F51"}}}/>} label="5" labelPlacement="bottom"/>                        </RadioGroup>
                <br/>
                <div className="button">
                <Button variant="contained" sx={{backgroundColor:"#E76F51", ":hover":{backgroundColor:"#E76F51"}}} type="submit">Next</Button>
                </div>
            </FormControl>
        </form>
    </div>
    )
}

export default Feeling;