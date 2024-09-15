import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('githubicon');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <BottomNavigation sx={{ maxWidth:'100%',marginTop:'10%',display:'flex',justifyContent:'center',alignItems:'center',
      marginLeft:{xs:'5%',sm:'5%'},marginRight:{xs:'5%',sm:'5%'}
    }} value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="GitHub"
        value="githubicon"
        icon={<GitHubIcon/>}
        href='https://github.com/Tuhinm2002'
      />
      <BottomNavigationAction
        label="X"
        value="xicon"
        icon={<XIcon />}
      />
      <BottomNavigationAction
        label="LinkedIn"
        value="linkedinicon"
        icon={<LinkedInIcon />}
        href='https://github.com/tuhinm2002'
      />
      <BottomNavigationAction label="Instagram" value="instagram" icon={<InstagramIcon />} />
    </BottomNavigation>
  );
}