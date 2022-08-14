import React , {useState} from 'react';
import {CircularProgress, Box, MenuItem, Select } from '@mui/material';


const SearchBar = (props) => {
    const[loading,setLoading] = useState(false);
    const [jobSearch,setJobSearch] = useState({
        type : "Full time",
        location : "Remote"
    });

    const handleChange = (e) =>{

        setJobSearch((oldState) =>
        ({...oldState ,
        [e.target.name]: e.target.value,}));
    };
    const search =async () =>{
        setLoading(true);
        await props.fetchJobsCustom(jobSearch);
        setLoading(false);
    }
    
    return (
        <Box p={2} mt={-4} mb={2} className="wrapper">
            <Select onChange={handleChange} value={jobSearch.type} name="type" defaultValue="Full time" className="nested_components">
                <MenuItem value="Full time">Full time</MenuItem>
                <MenuItem value="Part time">Part time</MenuItem>
                <MenuItem value="Contract">Contract</MenuItem>
            </Select>
            <Select onChange={handleChange} value={jobSearch.location} name="location" defaultValue="Remote" className="nested_components">
                <MenuItem value="Remote">Remote</MenuItem>
                <MenuItem value="In-office">In-office</MenuItem>
            </Select>
            <button disabled={loading} type="button" className="btn btn-primary btn-lg   mx-2 "
            onClick={search}
            >
            {loading ?(
                        <CircularProgress color="secondary" size={22} />
                    ):(
                    "Search"
                   )}
            </button>
        </Box>
    )
}

export default SearchBar