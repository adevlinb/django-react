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
        guest_can_pause: true,
        votes_to_skip: defaultVotes
    });

    function handleVotesChange(evt) {
        setFormData({...formData, votes_to_skip: evt.target.value });
        console.log(formData, "votes")
    }

    function handleGuestCanPauseChange(evt) {
        setFormData({...formData, guest_can_pause: evt.target.value === "true" ? true : false });
        console.log(formData, "pause")
    }

    function handleRoomButtonPressed() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        }
        fetch("/api/create-room", requestOptions)
            .then((response) => response.json())
            .then((data) => console.log(data))

    }

    function handleBackButtonPressed() {

    }

    return (
        <>
        <Grid container spacing={1}>
            <Grid item xs={12} align="center">
                <Typography component="h4" variant="h4">Create a room</Typography>
            </Grid>
            <Grid item xs={12} align="center">
                <FormControl component="fieldset">
                    <FormHelperText component={"div"}>
                        <div align='center'>Guest Control of Playback State</div>
                    </FormHelperText>
                    <RadioGroup row onChange={handleGuestCanPauseChange}>
                        <FormControlLabel
                            name="guest_can_pause"
                            value="true"
                            control={ <Radio color="primary" />}
                            label="Play/Pause"
                            labelPlacement='bottom'
                            />
                        <FormControlLabel
                            name="guest_can_pause"
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
                    <TextField required={true} type='number' value={formData.votes_to_skip} name="votes_to_skip" inputProps={{ min: 1, style: { textAlign: 'center' } }} onChange={handleVotesChange} />
                    <FormHelperText component={"div"}>
                        <div align='center'>
                            Votes Required to Skip Song
                        </div>
                    </FormHelperText>
                </FormControl>
            </Grid>
            <Grid item xs={12} align="center">
                <Button color='primary' variant='contained' onClick={handleRoomButtonPressed}>
                    Create a room.
                </Button>
                <Button color='secondary' variant='contained' to='/' compoonent={Link} onClick={handleBackButtonPressed}>
                    Back
                </Button>
            </Grid>
        </Grid>
        </>
    )
}
