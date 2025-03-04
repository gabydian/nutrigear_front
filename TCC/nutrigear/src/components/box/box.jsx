import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(0deg)',
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: 'rotate(180deg)',
      },
    },
  ],
}));

export default function RecipeReviewCard({ data }) {
  const [expandedStates, setExpandedStates] = React.useState(
    data ? data.map(() => false) : []
  );

  const handleExpandClick = (index) => {
    setExpandedStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  if (!data) {
    return <div>No data available.</div>; // Lidando com dados vazios ou nulos
  }

  return (
    <div>
      {data.map((item, index) => (
        <Card key={index} sx={{ maxWidth: 345, marginBottom: 2 }}>
          <CardHeader
            pessoa={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                
                {item.pessoa || 'C'} {/* Exibe o avatar ou 'C' do Convidado */}
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={item.titulo}
            subheader={item.dataCriacao}
          />
          <CardMedia
            component="img"
            height="194"
            image={item.imagem}
            alt={item.title}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {item.descricao}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <ExpandMore
              expand={expandedStates[index]}
              onClick={() => handleExpandClick(index)} // Passa o índice
              aria-expanded={expandedStates[index]}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expandedStates[index]} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>{item.texto}</Typography>
            </CardContent>
          </Collapse>
        </Card>
      ))}
    </div>
  );
}
