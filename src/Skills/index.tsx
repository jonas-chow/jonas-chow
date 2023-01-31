import React from 'react';
import { Box, Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import SkillItem, { Skill } from './SkillItem';

const programmingLanguageSkills: Skill[] = [
  {
    label: "Typescript",
    percentage: 90,
  },
  {
    label: "Python",
    percentage: 90,
  },
  {
    label: "Java",
    percentage: 80,
  },
  {
    label: "C++",
    percentage: 70,
  },
  {
    label: "C#",
    percentage: 70,
  },
  {
    label: "SQL",
    percentage: 60,
  },
];

const techStackSkills: Skill[] = [
  {
    label: "React",
    percentage: 90,
  },
  {
    label: "Google Cloud",
    percentage: 70,
  },
  {
    label: "Pytorch",
    percentage: 70,
  },
  {
    label: "OpenCV",
    percentage: 70,
  },
  {
    label: "Unity",
    percentage: 70,
  }
];

const languageSkills: Skill[] = [
  {
    label: "English",
    percentage: 100,
  },
  {
    label: "Japanese",
    percentage: 80,
  },
  {
    label: "Mandarin",
    percentage: 70,
  },
];

const Skills = () => {
    return (
        <Box sx={{ padding: "60px", paddingTop: "30px" }} id="skills" >
          <Typography variant='h3' color='textPrimary'>
            Skills
          </Typography>
          <Typography variant='h3' sx={{ paddingY: 2 }}>
            Technologies
          </Typography>
          <Grid2 container spacing={2}>
            {
              techStackSkills.map(({ label, percentage }, index) => (
                <Grid2 xs={12} md={6} key={`techskill${index}`}>
                  <SkillItem 
                    label={label}
                    percentage={percentage}
                  />
                </Grid2>
              ))
            }
          </Grid2> 
          <Typography variant='h3' sx={{ paddingY: 2 }}>
            Programming Languages
          </Typography>
          <Grid2 container spacing={2}>
            {
              programmingLanguageSkills.map(({ label, percentage }, index) => (
                <Grid2 xs={12} md={6} key={`plskill${index}`}>
                  <SkillItem 
                    label={label}
                    percentage={percentage}
                  />
                </Grid2>
              ))
            }
          </Grid2> 
          <Typography variant='h3' sx={{ paddingY: 2 }}>
            Languages
          </Typography>
          <Grid2 container spacing={2}>
            {
              languageSkills.map(({ label, percentage }, index) => (
                <Grid2 xs={12} md={6} key={`languageskill${index}`}>
                  <SkillItem 
                    label={label}
                    percentage={percentage}
                  />
                </Grid2>
              ))
            }
          </Grid2> 
        </Box>
    );
};

export default Skills;
