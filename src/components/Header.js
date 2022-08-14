import React from "react";
import { Box, Grid, Typography } from '@mui/material';

const Header = (props) => {
    return (
        <div>
            <Box py={10} style={{ backgroundColor: "black" }} color="white">
                <Grid container justifyContent="center">
                    <Grid item xs={10}>
                        <Box display="flex" justifyContent="space-between">
                            <Typography variant="h4">
                                Kareer Konnect
                            </Typography>
                            <button onClick={props.openNewJobModal} type="button" className="btn btn-primary btn-lg">Post a Job</button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default Header;