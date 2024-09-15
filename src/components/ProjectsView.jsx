import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import MediaCard from './CardView';
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

const projectData = [
    {
      projectName : "cars-commerce",
      githubLink : 'https://github.com/Tuhinm2002/cars-commerce.git',
      about : "Built using Java spring web,H2-database,react,material ui,bootstrap,css,html",
      deployLink : ''
    },
    {
      projectName : "Bert YouTube Sentiment",
      githubLink : "https://github.com/Tuhinm2002/bert_youtube_sentiment.git",
      about : "Built using Java spring web,H2-database,react,material ui,bootstrap,css,html",
      deployLink : "https://huggingface.co/spaces/Tuhinm2002/bert_youtube_sentiment"
    },
    {
      projectName : "BERTVision",
      githubLink : "https://github.com/Tuhinm2002/BERTVision.git",
      about : "Built using streamlit,pytorch,huggingface dataset,huggingface BERT model",
      deployLink : "https://huggingface.co/spaces/Tuhinm2002/bert-vision"
    },
    {
      projectName : "Frontend community website",
      githubLink : "https://github.com/Tuhinm2002/website.git",
      about : "Built using React JS, HTML, and Tailwind CSS ",
      deployLink : "https://tuhinm2002.github.io/website/"
    }
  ]

export default function ProjectsView() {
  return (
    <Box sx={{flexGrow: 1,display:'flex',alignItems:'center',justifyContent:'center',marginTop:{xs:'10%'},flexDirection:'column',marginRight:{xs:'5%'} }}>
        <Typography>My Projects</Typography>
      <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 2, sm: 8, md: 12 }}>
        {Array.from(Array(4)).map((_, index) => (
          <Grid key={index} size={{ xs: 2, sm: 3, md: 3 }} sx={{maxWidth:{xs:'500'},marginLeft:{xs:'5%',sm:'5%',md:'none'}}}>
            <MediaCard projectName = {projectData[index].projectName} 
          githubLink = {projectData[index].githubLink} about = {projectData[index].about}
          deployLink = {projectData[index].deployLink}/>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}