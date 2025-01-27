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

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);
  const conteudos = [
    {'Avatar':'L', 'Autor':'Leonardo', 'title':'Meu Title1','msg':'Mensagem por extenso, o conteúdo propriamente dito',
       'imagem': '../assets/artigos/img1.jpg'},
    {'Avatar':'J', 'Autor':'João','title':'Meu Title2','msg':'Mensagem por extenso, o conteúdo propriamente dito', 
      'imagem':'../assets/artigos/img2.jpg'},

  ]
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
    {conteudos.map((conteudo, index) => (  
    <Card key={index} sx={{ maxWidth: 345 }}> 
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[800] }} aria-label="recipe">
            {conteudo.Avatar}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
          </IconButton>
        }
        title={conteudo.Autor}
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={conteudo.imagem}
        alt={conteudo.index}
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {conteudo.msg}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        </IconButton>
        <IconButton aria-label="share">
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >{conteudo.msg}
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography sx={{ marginBottom: 2 }}>

          </Typography>
         
        </CardContent>
      </Collapse>
    </Card>
    ))}
    </div>
  );
}
