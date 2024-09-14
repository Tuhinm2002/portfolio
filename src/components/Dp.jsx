import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';

export default function SizeAvatars() {
  return (
    <Box sx={{display:'flex',flexDirection:{xs:'column'} }}>
      <Avatar
        alt="Remy Sharp"
        src="/src/components/images/mercedes_amg.jpg"
        sx={{ width: 356, height: 356,marginTop:'10%',marginLeft:{xs:'5%',md:'15%'},marginRight:{xs:'5%'}}}
      />
      <Box sx={{marginTop:'15%',marginLeft:{xs:'5%',md:'10%'},marginRight:{xs:'5%'},width:600}}>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          About me 
        </AccordionSummary>
        <AccordionDetails>
        Tuhin's Full name is Tuhin Mondal also known by the code name 👦. 
        tuhinm2002 in many coding platforms like leetcode and codechef and also in github. 
        He is a 2025 B.Tech grad in the field of Computer Science 🧑‍💻. 
        He has a great passsion for Backend Developement and Robust systems 💻🖥️.
        He is also passionate for machine leraning and deep learning research. 
        He is currently looking forward to build a great career into this. 
        Hope he will succeed in his dreams 🌫️
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          My Education
        </AccordionSummary>
        <AccordionDetails>
          <h4>University</h4> 
          Bachelor of Technology ---------------------- 8/2021 - 7/2025<br/>
          University of Engineering and Management ---- 8.16 CGPA

          <h4>Schooling</h4>
          Senior Secondary ---------------------------- 4/2020 - 4/2021<br/>
          Kendriya Vidyalaya Santragachi -------------- 83 %<br/>

          Secondary ----------------------------------- 4/2018 - 4/2019<br/>
          Kendriya Vidyalaya Santragachi -------------- 82.6%
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          My career and Resume
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
        <AccordionActions>
          <Button>Cancel</Button>
          <Button>Agree</Button>
        </AccordionActions>
      </Accordion>
    </Box>
      </Box>
  );
}
