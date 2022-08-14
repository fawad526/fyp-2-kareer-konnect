import React ,{useState} from "react";
import { Box, Grid, FilledInput, Select, MenuItem, Dialog, DialogTitle, DialogContent, DialogActions, Typography, IconButton, CircularProgress } from '@mui/material';
import { Close as CloseIcon } from "@mui/icons-material";


const initState ={
    title: "",
    type: "Full Time",
    companyName: "",
    companyUrl: "",
    location: "Remote",
    link: "",
    description: "",
    skills: [],
}

const NewJobModal = (props) => {

const [loading,setLoading] = useState(false);
const [jobDetails,setJobDetails] = useState(initState);

const handleChange = (e) =>{
    
    setJobDetails((oldState) =>({...oldState ,[e.target.name]: e.target.value,}));
};

const addRemoveSkill = (skill) => 
    jobDetails.skills.includes(skill)
? setJobDetails((oldState) => ({ 
    ...oldState,
    skills: oldState.skills.filter((s) => s !== skill),
}))
:setJobDetails((oldState) =>({...oldState,
    skills:oldState.skills.concat(skill),}));

    const handleSubmit= async ()=>{
        for(const field in jobDetails){
            if(typeof jobDetails[field]==="string" && !jobDetails[field])
            return ;
        }
        if(!jobDetails.skills.length)return;
        setLoading(true);
        await props.postJob(jobDetails);
        closeModal();
    }

    const closeModal = () =>{
            setJobDetails(initState);
            setLoading(false);
            props.closeModal();
    }

const skills = [
        "JavaScript", "React", "Node", "Vue", "Firebase", "MongoDB", "SQL", "Angular"
    ];
    console.log(jobDetails);

    return (
        <Dialog open={props.newJobModal} fullWidth>
            <DialogTitle>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    Post Job
                    <IconButton onClick={closeModal}>
                        <CloseIcon />
                    </IconButton>
                </Box>
            </DialogTitle>
            <DialogContent>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <FilledInput 
                        onChange={handleChange}
                        name="title"
                        value={jobDetails.title}
                        autoComplete="off"
                        placeholder="Job title *" disableUnderline fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <Select
                            onChange={handleChange}
                            fullWidth
                            name="type"
                            value={jobDetails.type}
                            disableUnderline
                            varaint="filled"
                        >
                            <MenuItem value="Full Time">Full Time</MenuItem>
                            <MenuItem value="Part Time">Part Time</MenuItem>
                            <MenuItem value="Contract">Contract</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput
                        onChange={handleChange}
                        name="companyName"
                        value={jobDetails.companyName}
                        autoComplete="off"
                         placeholder="Company Name *" disableUnderline fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput
                        onChange={handleChange}
                        name="companyUrl"
                        value={jobDetails.companyUrl}
                        autoComplete="off"
                         placeholder="Company URL *" disableUnderline fullWidth />
                    </Grid>

                    <Grid item xs={6}>
                        <Select 
                        onChange={handleChange}
                        fullWidth 
                        name="location"
                        value={jobDetails.location}
                        disableUnderline 
                        variant="filled" 
                        >
                            <MenuItem value="Remote">Remote</MenuItem>
                            <MenuItem value="In-office">In-office</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput
                        onChange={handleChange}
                        name="link"
                        value={jobDetails.link}
                        autoComplete="off"
                         placeholder="Job link *" disableUnderline fullWidth />
                    </Grid>
                    <Grid item xs={12}>
                        <FilledInput
                        onChange={handleChange}
                        name="description"
                        value={jobDetails.description}
                        autoComplete="off"
                         placeholder="Job Description *" disableUnderline fullWidth
                            multiline
                            rows={4}
                        />
                    </Grid>
                </Grid>
                <Box mt={2}>
                    <Typography>Skills*</Typography>
                    <Box display="flex">
                        {skills.map((skill) => (
                            <Box onClick={() => addRemoveSkill(skill)} className="Skills" key={skill}>{skill}

                            </Box>
                        ))}</Box>
                </Box>
            </DialogContent>
            <DialogActions>
                <Box color="red" width="100%" display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="caption">*Required Fields</Typography>
                    <button onClick={handleSubmit} type="button" className="btn btn-primary " disable={loading}>
                    {loading ?(
                        <CircularProgress color="secondary" size={22} />
                    ):(
                    "Post a Job"
                   )} 
                    </button>
                </Box>
            </DialogActions>
        </Dialog>
    )
}
export default NewJobModal ;