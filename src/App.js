import React, {useState, useEffect} from 'react';
import {Button,CircularProgress, Grid ,Box } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import theme from "./theme/Theme"
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import JobCard from './components/Jobs/JobCard';
import NewJobModal from './components/Jobs/NewJobModal';
import {firestore , app} from "./firebase/config";
import { Close as CloseIcon } from "@mui/icons-material";
import ViewJobModal from './components/Jobs/ViewJobModal';

function App() {
const [jobs , setJobs]= useState([]);
const [loading,setLoading] = useState (true);
const [customSearch,setCustomSearch] = useState (false);
const [newJobModal,setNewJobModal]= useState(false);
const [viewJob,setViewJob]= useState({});
  const fetchJobs = async() => {
    setCustomSearch(false);
    setLoading(true);
    const req = await  firestore
    .collection("jobs")
    .orderBy("postedOn","desc")
    .get();
    const tempJobs = req.docs.map((job)=>
    ({...job.data() ,
       id:job.id ,
       postedOn: job.data()
       .postedOn
       .toDate()
       ,}));
    setJobs(tempJobs);
    setLoading(false);
  };
const fetchJobsCustom =async jobSearch =>{
  setCustomSearch(true);
  setLoading(true);
    const req = await  firestore
    .collection("jobs")
    .orderBy("postedOn","desc")
    .where("location",'==',jobSearch.location)
    .where("type",'==',jobSearch.type)
    .get();
    const tempJobs = req.docs.map((job)=>
    ({...job.data() ,
       id:job.id ,
       postedOn: job.data()
       .postedOn
       .toDate()
       ,}));
    setJobs(tempJobs);
    setLoading(false);
}

  const postJob = async (jobDetails) => {
    await firestore.collection('jobs').add({ ...jobDetails,
    postedOn:app.firestore.FieldValue.serverTimestamp(),
    });
    fetchJobs();
  };
  useEffect(() =>{
    fetchJobs();
  },[]);
  return (
    <ThemeProvider theme={theme}>
      <Header openNewJobModal={()=>setNewJobModal(true)} />
       <NewJobModal closeModal={()=>setNewJobModal(false)} 
       newJobModal={newJobModal} postJob={postJob}/>
       <ViewJobModal job={viewJob} closeModal={()=> setViewJob({})}/>
     <Box mb={3}>
      <Grid container justifyContent="center">
        <Grid item xs={10}>
          <SearchBar fetchJobsCustom={fetchJobsCustom} />

          {
            loading ?(
              <Box display="flex" justifyContnet="center" ><CircularProgress/></Box>
            )
            : (
              <>
              {customSearch && (
              <Box my={2} display="flex" justifyContent="flex-end">
                <Button onClick={fetchJobs}>
                  <CloseIcon size={20}/>
                  Custom Search 
                </Button>
              </Box>
              )}
             { jobs.map((job)=>
             ( <JobCard open={() => setViewJob(job)} key={job.id} {...job}/>
              ))}
              </>
          )}
        </Grid>
      </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default App;