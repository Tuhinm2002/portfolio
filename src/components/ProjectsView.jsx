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
    projectName : "cars-commerce",
    githubLink : 'https://github.com/Tuhinm2002/cars-commerce.git',
    about : "* Developed a full-stack ecommerce platform using Java Spring (backend) and React (frontend)" +
            "* Implemented dynamic product listings with an intuitive user interface." + 
            "* Technologies used: JavaScript (64.0%), Java (27.5%), CSS (6.4%), and HTML (2.1%)" +
            "* Focused on performance, scalability, and user experience.",
    deployLink : ''
  },
  {
    projectName : "Bert YouTube Sentiment",
    githubLink : "https://github.com/Tuhinm2002/bert_youtube_sentiment.git",
    about : "* This project is designed to analyze sentiment in comments from any uploaded YouTube video." +
            "* It focuses on categorizing comments into two main categories: positive and negative sentiments." + 
            "* Utilizes a fine-tuned model trained on a comprehensive Twitter comments dataset." +
            "* Deployed on a server environment using advanced technologies like Hugging Face Spaces and Docker." ,
    deployLink : "https://huggingface.co/spaces/Tuhinm2002/bert_youtube_sentiment"
  },
  {
    projectName : "BERTVision",
    githubLink : "https://github.com/Tuhinm2002/BERTVision.git",
    about : "* This project aims to fuse the realms of Computer Vision and Natural Language Processing." +
                  "* Utilizing a BERT model, the project discerns emotions from text in real time via computer vision." +
                  "* Display text before a camera to enable the web app to instantaneously predict and categorize the text." +
                  "* Deploying via Hugging Face Spaces, and packaging with Docker ensure streamlined management and deployment.",
    deployLink : "https://huggingface.co/spaces/Tuhinm2002/bert-vision"
  },
  {
    projectName : "Frontend community website",
    githubLink : "https://github.com/Tuhinm2002/website.git",
    about : "* Developed a front-end project using React JS, HTML, and Tailwind CSS for a Twitter-based software engineering community." +
            "* Ensured project quality through CI/CD pipelines for continuous integration and delivery."+
            "* Contributed to open-source development, fostering community engagement and collaboration.",
    deployLink : "https://tuhinm2002.github.io/website/"
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
          <Box><MediaCard projectName = {projectData[0].projectName} 
          githubLink = {projectData[0].githubLink} about = {projectData[0].about}
          deployLink = {projectData[0].deployLink}/></Box>
          <Box><MediaCard projectName = {projectData[1].projectName} 
          githubLink = {projectData[1].githubLink} about = {projectData[1].about}
          deployLink = {projectData[1].deployLink}/></Box>
        </Box>
        <Box>
          <Box sx={{ width: '100%',marginTop:'15%' }}>
            <MediaCard projectName = {projectData[2].projectName} 
          githubLink = {projectData[2].githubLink} about = {projectData[2].about}
          deployLink = {projectData[2].deployLink}/>
          </Box>
          <Box sx={{ width: '100%',marginTop:'15%' }}>
              <MediaCard projectName = {projectData[3].projectName} 
          githubLink = {projectData[3].githubLink} about = {projectData[3].about}
          deployLink = {projectData[3].deployLink}/>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}