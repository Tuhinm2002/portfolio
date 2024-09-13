import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import MediaCard from './CardView'

const icon = (
  <Paper sx={{ m: 1, width: 100, height: 100 }} elevation={4}>
    <svg>
      <Box
        component="polygon"
        points="0,100 50,00, 100,100"
        sx={(theme) => ({
          fill: theme.palette.common.white,
          stroke: theme.palette.divider,
          strokeWidth: 1,
        })}
      />
    </svg>
  </Paper>
);

const projectData = [
  {
    
  }
]


export default function ProjectsView() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box sx={{ height: 300,marginTop: 25,marginLeft:'30%'}}>
    
      <Box
        sx={{
          '& > :not(style)': {
            display: 'flex',
            justifyContent: 'space-around',
            height: 250,
            width: 700,
          },
        }}
      >
        <Box>
          <Box><MediaCard/></Box>
          <Box><MediaCard/></Box>
        </Box>
        <Box>
          <Box sx={{ width: '100%',marginTop:'15%' }}>
            <MediaCard/>
          </Box>
          <Box sx={{ width: '100%',marginTop:'15%' }}>
              <MediaCard/>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}