import React, { useState } from 'react';
import { Link } from "react-router-dom"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormHelperText from '@mui/material/FormHelperText';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';



export default function CreateRoomPage() {
    let defaultVotes = 2;
    const [formData, setFormData] = useState({
        guestCanPause: true,
        votesToSkip: defaultVotes
    });

    function handleFormChange(evt) {
        evt.preventDefault();
        setFormData({ ...formData, [evt.target.name]: evt.target.value });
        console.log(formData, "formData");
    }

    function handleRoomButtonPressed() {

    }

    return (
        <>
        <Grid container spacing={1}>
            <Grid item xs={12} align="center">
                <Typography component="h4" variant="h4">Create a room</Typography>
            </Grid>
            <Grid item xs={12} align="center">
                <FormControl component="fieldset">
                    <FormHelperText>
                        <div align='center'>Guest Control of Playback State</div>
                    </FormHelperText>
                    <RadioGroup row defaultValue="true" onChange={handleFormChange}>
                        <FormControlLabel
                            value="true"
                            control={ <Radio color="primary" />}
                            label="Play/Pause"
                            labelPlacement='bottom'
                        />
                        <FormControlLabel
                            value="false"
                            control={ <Radio color="secondary" />}
                            label="No Control"
                            labelPlacement='bottom'
                        />
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid item xs={12} align="center">
                <FormControl>
                    <TextField required={true} type='number' defaultValue={defaultVotes} inputProps={{ min: 1, style: { textAlign: 'center' } }} onChange={handleFormChange} />
                    <FormHelperText>
                        <div align='center'>
                            Votes Required to Skip Song
                        </div>
                    </FormHelperText>
                </FormControl>
            </Grid>
            <Grid item xs={12} align="center">
                <Button color='primary' variant='contained'>
                    Create a room.
                </Button>
                <Button color='secondary' variant='contained' to='/' compoonent={Link}>
                    Back
                </Button>
            </Grid>
        </Grid>
        </>
    )
}
