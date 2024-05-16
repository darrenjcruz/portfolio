import React from 'react';
import { Box, Tab, Typography } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import Python from './Python';
import CPlusPlus from './C++';
import HTML from './HTML';
import Swift from './Swift';

function Projects() {
    // State for managing the selected tab
    const [value, setValue] = React.useState('1');

    // Function to handle tab change
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            {/* Projects title */}
            <Typography variant="h1" align="center" gutterBottom>
                Projects
            </Typography>
            {/* Tab container */}
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    {/* Tab list */}
                    <Box sx={{display: 'flex', justifyContent: 'center' }} >
                        <TabList onChange={handleChange} aria-label="lab API tabs example" variant="scrollable" scrollButtons="auto" centered sx={{ width: '75%', bgcolor: '#353535', borderRadius:'8px'}}>
                            <Tab label="Python" value="1" />
                            <Tab label="C++" value="2" />
                            <Tab label="HTML/JavaScript/React" value="3" />
                            <Tab label="Swift/SwiftUI" value="4" />
                        </TabList>
                    </Box>

                    {/* Tab panels */}
                    <TabPanel value="1">
                        <Python />
                    </TabPanel>

                    <TabPanel value="2">
                        <CPlusPlus />
                    </TabPanel>

                    <TabPanel value="3">
                        <HTML />
                    </TabPanel>
                    
                    <TabPanel value="4">
                        <Swift />
                    </TabPanel>
                </TabContext>
            </Box>
        </>
    );
}

export default Projects;
