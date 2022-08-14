import React from "react";
import { Box, Grid, Typography, Button } from '@mui/material';
import {differenceInMinutes} from 'date-fns';


const JobCard = (props) => {

    return (

        <Box p={2} className="JobCard_wrapper">
            <Grid container alignItems="center">
                <Grid item xs>
                    <Typography variant="subtitle1">{props.title}</Typography>
                    <Typography className="companyName" variant="subtitle1">{props.companyName}</Typography>
                </Grid>
                <Grid item container xs>
                    {props.skills.map((skill) => <Grid key={skill} style={{ margin: "5px" }} className="skillChip" item>{skill}</Grid>)}
                </Grid>
                <Grid item container direction="column" alignItems="flex-end" xs>
                    <Grid item xs>
                        <Typography variant="caption">{differenceInMinutes(Date.now(),props.postedOn)} min ago | {props.type} | {props.location}</Typography>
                    </Grid>
                    <Grid>
                        <Box mt={2}>
                            <Button onClick={props.open} variant="outlined">Check</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Box>


    )
}
export default JobCard