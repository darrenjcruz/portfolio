import React from 'react';
import { Box, Tab, Typography } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import Python from './Python';
import HTML from './HTML';

function Projects() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Typography className="Title" variant="h6" noWrap sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.3rem', color: 'inherit', textDecoration: 'none', }}>
                Projects
            </Typography>
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ width: '100%', bgcolor: 'background.paper', borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example" centered >
                            <Tab label="Python" value="1" />
                            <Tab label="C++" value="2" />
                            <Tab label="HTML/JavaScript/React" value="3" />
                        </TabList>
                    </Box>

                    <TabPanel value="1">
                        <Python />
                    </TabPanel>

                    <TabPanel value="2">
                        C++ Projects
                    </TabPanel>

                    <TabPanel value="3">
                        <HTML />
                    </TabPanel>
                </TabContext>
            </Box>
        </>
    );
}

export default Projects;