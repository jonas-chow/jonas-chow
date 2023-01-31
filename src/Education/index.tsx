import React from 'react';
import { Box, Typography } from '@mui/material';

// TODO: education talk about TA, GDG, module quality
const Education = () => {
    return (
        <Box sx={{ padding: "60px", paddingTop: "30px" }} id="education">
          <Typography variant='h3' color='textPrimary' sx={{ paddingBottom: 2 }}>
            Education
          </Typography>
          <Typography variant='h3'>
            National University of Singapore (NUS)
          </Typography>
          <Typography>
            Bachelor of Computing (Computer Science), Honours
            <br />
            Expected Graduation Date: May 2024
          </Typography>
          <Typography>
              <strong>Academics</strong>
              <br />
              Current CAP: 4.92 (out of a maximum of 5)
              </Typography>
              <ul>
                <li>Dean's List for AY20/21 Semester 1 and AY22/23 Semester 1</li>
                <li>A+ for many difficult and important modules such as Programming Methodology, and Data Structures and Algorithms</li>
                <li>Top students for multiple modules such as Software Engineering and Computer Graphics</li>
              </ul>
            

            <Typography>
              <strong>Teaching</strong>
              <br />
              Teaching Assistant since August 2022
              <ul>
                <li>Taught difficult modules such as Programming Methodology, and Data Structures and Algorithms</li>
                <li>Gained a deeper understanding on these topics by teaching them</li>
                <li>Placed on the <a href="https://www.comp.nus.edu.sg/programmes/ug/honour/tutors/" target="_blank" rel="noreferrer noopener">Honour List of Student Tutors</a> for AY2022-23</li>
              </ul>
            </Typography>

            <Typography>
              <strong>Co-curricular Activities</strong>
              <br />
              Member of NUS Games Development Group since 2020, joined the EXCO in 2022.
              <ul>
                <li>Built the website for our annual Game Jam and helped organise the game jam</li>
                <li>Also helped with the planning and conducting of club sessions teaching newer members how to use Unity to make a game</li>
              </ul>
            </Typography>
          <Typography variant='h3'>
            Raffles Institution
          </Typography>
          <Typography variant='body1'>
            Achieved 4 As in 'A'-levels for H2 Mathematics, Biology, Economics, and Chemistry
            <br />
            <strong>Co-curricular Activities</strong>
            <ul>
              <li>Attained Silver Medal in Singapore Chemistry Olympiad 2016</li>
              <li>Invited to training team for International Chemistry Olympiad 2017</li>
              <li>Section Leader for Alto 1 in Raffles Institution Guitar Ensemble</li>
            </ul>
          </Typography>
        </Box>
    );
};

export default Education;
