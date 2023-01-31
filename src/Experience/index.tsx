import React from 'react';
import { Box, Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import ThumbnailItem, { ThumbnailProps } from '../shared/ThumbnailItem';
import IMAGES from '../shared/images';

const experience: ThumbnailProps[] = [
  {
    title: "Shopee",
    thumbnailPath: IMAGES["shopee"],
    description: "Worked on the frontend of an internal platform for A/B testing of Ad algorithms. Learnt about various facets of frontend development such as responsive design and making reusable custom components. Also in charge of the integration with the backend.",
  },
];

const Experience = () => {
    return (
        <Box sx={{ padding: "60px", backgroundColor: "#FDF2DD", paddingTop: "30px" }} id="experience" >
          <Typography variant='h3' color='textPrimary' sx={{ paddingBottom: 2 }}>
            Experience
          </Typography>
          <Grid2 container spacing={2}>
            {
              experience.map(({ thumbnailPath, link, title, description, redirect }, index) => (
                <Grid2 xs={6} lg={4} key={`project ${index}`}>
                  <ThumbnailItem 
                    title={title}
                    thumbnailPath={thumbnailPath}
                    link={link}
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

export default Experience;
