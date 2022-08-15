import React from 'react';
import { Box, Grid,Button,Dialog, DialogTitle, DialogContent, DialogActions, Typography, IconButton } from '@mui/material';
import { Close as CloseIcon } from "@mui/icons-material";
import {format} from 'date-fns';



const ViewJobModal = (props) => {
  return (
    <Dialog open={!!Object.keys(props.job).length} fullWidth >
    <DialogTitle>
    <Box display="flex" justifyContent="space-between" alignItems="center">
        {props.job.tile} @ {props.job.companyName}
        <IconButton onClick={props.closeModal}>
            <CloseIcon />
        </IconButton>
    </Box>
</DialogTitle>
<DialogContent>
<Box className="info"  display="flex">
    <Typography margin={1} variant="caption" fontWeight={600}>Posted On :</Typography>
    <Typography margin={1} variant="body2">{props.job.postedOn &&
        format(props.job.postedOn,"dd/MMM/YYY HH:MM")}</Typography>
</Box>
<Box className="info"  display="flex">
    <Typography margin={1} variant="caption" fontWeight={600}>Job type :</Typography>
    <Typography margin={1} variant="body2">{props.job.type}</Typography>
</Box>
<Box className="info"  display="flex">
    <Typography margin={1} variant="caption" fontWeight={600}>Job location :</Typography>
    <Typography margin={1} variant="body2">{props.job.location}</Typography>
</Box>
<Box className="info"  display="flex">
    <Typography margin={1} variant="caption" fontWeight={600}>Job description :</Typography>
    <Typography margin={1} variant="body2">{props.job.description}</Typography>
</Box>
<Box className="info"  display="flex">
    <Typography margin={1} variant="caption" fontWeight={600}>Comapny Name :</Typography>
    <Typography margin={1} variant="body2">{props.job.companyName}</Typography>
</Box>
<Box className="info"  display="flex">
    <Typography margin={1} variant="caption" fontWeight={600}>Company Website :</Typography>
    <Typography margin={1} variant="body2">{props.job.companyUrl}</Typography>
</Box>
<Box className="info" >
    <Typography margin={1} variant="caption" fontWeight={600}>Skills :</Typography>
    <Grid dispaly="flex" conatiner alignItems="center" >
        {props.job.skills &&
        props.job.skills.map((skill)=>
        (<Grid className="Skills" display="inline-block" borderRadius={2}  margin={1} padding={1} borderSize={3} item key ={skill} >
            {skill}
        </Grid>)
        )
        }

    </Grid>
</Box>
</DialogContent>
<DialogActions>
    <Button variant="outlined" component="a" href={props.job.link} target="_blank" >Apply</Button>
</DialogActions>
</Dialog>
  )
}

export default ViewJobModal