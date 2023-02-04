import React from 'react';
import { Box, Typography } from '@mui/material';
import ThumbnailItem, { ThumbnailProps } from '../shared/ThumbnailItem';
import Grid2 from '@mui/material/Unstable_Grid2';
import IMAGES from '../shared/images';

const projects: ThumbnailProps[] = [
  {
    title: "Gamecraft Website",
    thumbnailPath: IMAGES["gamecraft"],
    link: "https://gamecraft.nusgdg.org",
    description: "A website for NUSGDG's annual gamejam. Users can register for an account, attend events, and submit their game.",
  },
  {
    title: "Threat Detection",
    thumbnailPath: IMAGES["cs4243"],
    githubLink: "https://github.com/jonas-chow/cs4243-mini-project",
    description: "A project done for a Computer Vision module. Used OpenCV and Pytorch to detect the threat level of a person in the image. Worked on background removal among other techniques.",
  },
  {
    title: "Source Academy Achievements System",
    thumbnailPath: IMAGES["source-academy"],
    link: "https://sourceacademy.org/",
    githubLink: "https://github.com/source-academy/frontend",
    description: "An easy-to-extend feature to keep track of which assignments students do, and reward them accordingly. Also keeps track of random events such as running code snippets.",
  },
  {
    title: "uma-utils",
    thumbnailPath: IMAGES["uma-utils"],
    githubLink: "https://github.com/jonas-chow/uma-utils",
    description: "Web app for players of popular game 'Uma Musume' to keep track of the best decision to be made. Made from scratch with webpack and react, hosted on heroku when the free plan existed.",
  },
  {
    title: "Sicarius",
    thumbnailPath: IMAGES["sicarius"],
    githubLink: "https://github.com/jonas-chow/orbital-jcyf",
    description: "Turn-based multiplayer game where players try to perform as many actions per turn to defeat the enemy first.",
  },
  {
    title: "Source Control",
    thumbnailPath: IMAGES["source-control"],
    githubLink: "https://github.com/AY2122S1-CS2103T-W08-2/tp",
    description: "CLI application to keep track of students' scores and analyse the performance of batches of students, made for a software engineering module.",
  },
];

const Projects = () => {
    return (
        <Box sx={{ padding: "60px", backgroundColor: "#FDF2DD", paddingTop: "30px" }} id="projects" >
          <Typography variant='h3' color='textPrimary' sx={{ paddingBottom: 2 }}>
            Projects
          </Typography>
          <Grid2 container spacing={2}>
            {
              projects.map(({ thumbnailPath, link, githubLink, title, description, redirect }, index) => (
                <Grid2 xs={12} md={6} xl={4} key={`project ${index}`}>
                  <ThumbnailItem 
                    title={title}
                    thumbnailPath={thumbnailPath}
                    link={link}
                    githubLink={githubLink}
                    description={description}
                    redirect={redirect}
                  />
                </Grid2>
              ))
            }
          </Grid2> 
        </Box>
    );
};

export default Projects;
