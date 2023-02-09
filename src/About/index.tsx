import React from 'react';
import { Box, Avatar, Typography, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import IMAGES from '../shared/images';

const About = () => {
    return (
        <Box sx={{ padding: "60px", display: "flex", paddingTop: "30px" }} id="about" >
          <Box>
            <Avatar sx={{ width: 388, height: 388 }} src={IMAGES["self"]} />
            <Box sx={{ display: "flex", justifyContent: "center" }}>
            <IconButton href="https://github.com/jonas-chow" target="_blank" rel="noreferrer noopener">
                <GitHubIcon fontSize='large' color="primary" /> 
              </IconButton>
              <IconButton href="https://www.linkedin.com/in/jonas-chow-bb7a9a227/" target="_blank" rel="noreferrer noopener">
                <LinkedInIcon fontSize='large' color="primary" /> 
              </IconButton>
              <IconButton href="mailto:jonaschow99@gmail.com" target="_blank" rel="noreferrer noopener">
                <EmailIcon fontSize='large' color="primary" /> 
              </IconButton>
            </Box>
          </Box>
          <Box sx={{ paddingLeft: "100px" }}>
            <Typography variant='h2' color='textPrimary'>
              Hello, I am
            </Typography>
            <Typography variant='h1' color='textSecondary'>
              Jonas Chow
            </Typography>
            <Typography variant='h2' color='textPrimary'>
              Software Engineer
            </Typography>
            <Typography variant='h3'>
              Highly driven Year 3 Computer Science undergraduate from the National University of Singapore (NUS) looking for a minimum 3-month long internship from May 2023, and hopefully be able to convert it to a full-time position after graduating. Interested in a wide range of topics including Computer Vision, Computer Graphics, and AI.
            </Typography>
          </Box>
        </Box>
    );
};

export default About;
