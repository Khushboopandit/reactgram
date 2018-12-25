import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Chat from '@material-ui/icons/QuestionAnswer';
import Button from '@material-ui/core/Button';
import posts from '../data/post';
import PopLikeButton from './addFavourite';

const styles = theme => ({
  root: {
    display: "grid",
    width: '100%',
    height: '100%',
    gridTemplateColumns: "22.5% 22.5% 22.5%",
    justifyContent: "center",
    [theme.breakpoints.down('md')]:{
      gridTemplateColumns: "96%",
    },
    [theme.breakpoints.down('sm')]:{
      gridTemplateColumns: "96%",
    },
    [theme.breakpoints.down('xs')]:{
      gridTemplateColumns: "96%",
    }, 
  },

  card: {
    maxWidth: 362,
    marginBottom: "30px",
    border: "4px solid #dbdbf169",
    [theme.breakpoints.down('md')]:{
      maxWidth: 960,
    },
  },

  media: {
    height: 344,
    [theme.breakpoints.down('md')]:{
      height: 724,
    },
    [theme.breakpoints.down('sm')]:{
      height: 686,
    },
    [theme.breakpoints.down('xs')]:{
      height: 336,
    },
  },

  button: {
    borderRadius: "2px",
    padding: "3% 20%",
    fontSize: "18px",
    color: "#3c5baf",
  },

  actions: {
    justifyContent: "center"
  },

  chatBtn: {
    borderRadius: "2px",
    padding: "3% 20%",
    left: "2%",
    color: "#3c5baf",
  },

  favoriteIcon: {
    fontSize: "16px",
  }
});

class Cards extends Component {
  constructor(props){
  super(props)
    this.state = {
      open: false,
      likeInc: 1,
    };
  }
  increaseLikes = (data) => {
      this.setState({ likeInc: this.state.likeInc+1, open: true})
      setTimeout(()=>{
        this.setState({open: false})
      }, 300)
  }


  render() {
    const {classes} = this.props;

    return (
      <div className = {classes.root}>
        {
          posts.map((data, i) => {
            console.log(data.display_src)
            return (<Card className = {classes.card} key = {i}>
            <CardActionArea>
              <CardMedia 
                className = {classes.media}
                image={data.display_src}
                />
              <CardContent>
                <Typography component="p">
                {data.caption}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.actions} disableActionSpacing>
              <Button variant="outlined" component="span" className={classes.button} onClick={()=>this.increaseLikes(data)}>
                <FavoriteIcon className={classes.favoriteIcon}/> 
                  {data.likes + this.state.likeInc}
              </Button>
              <Button variant="outlined" component="span" className={classes.chatBtn}>
                <Chat/>
              </Button> 
            </CardActions>
            </Card>)
            })
        }
        { this.state.open === true? <PopLikeButton visibility = {this.state.visibility}/> : null }
      </div>
    );
  }    
}


Cards.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Cards);