import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard(props) {
  return (
    <Card sx={{ maxWidth: 600,height:345,}}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title={props.projectName}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.projectName}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {props.about}
          {/* {props.techStack} */}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={props.deployLink}>Live Demo</Button>
        <Button size="small" href={props.githubLink}>GitHub</Button>
      </CardActions>
    </Card>
  );
}