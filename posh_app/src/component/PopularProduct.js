import React, {useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';


export default function PopularProduct() {
    const [value, setValue] = React.useState(2);

  return (
    <Card sx={{ maxWidth: 200, margin: 1 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="images/headphone.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Sony
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Kids Headphones Bulk 10 Pack Multi Colored For...
        </Typography>
      </CardContent>
      <CardActions>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      </CardActions>
      <CardActions>
        <Typography variant='h4' color="text.secondary">$100.00</Typography>
      </CardActions>
    </Card>
  );
}