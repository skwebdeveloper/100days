import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import "./day8.css"
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { yellow } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';


const useStyles = makeStyles((theme) =>({
    root:{
        maxWidth: 345,
        margin: '0 auto',
        marginTop: '100px',
    },
    avatar: {
        backgroundColor: yellow[700],
    },
    content: {
        padding: '10px',
        margin: '2px',
    },
    taging: {
        backgroundColor: 'black',
        color: 'white',
        padding: '5px',
        borderRadius: '5px',
    },
    MuiButton: {
    marginTop: '10px',    
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}
}))











const Day8 = () => {
   const[ initial,final ] = useState([])
   const date = new Date().toDateString()
   
   const refreshPage = () =>{
       window.location.reload(false)
   }
   

    useEffect(() =>{
        fetch("https://favqs.com/api/qotd")
        .then((res) => res.json())
        .then((data) => final(data.quote))
    }, [])
    const classes = useStyles();

    return (
        <div className="day8">
        <h1 className="heading__main">#8 Day API</h1>
            <Card className={classes.root}>
                <CardHeader 
                aria-label="Quotes"
                avatar={<Avatar className={classes.avatar}><span className="happy">😁</span></Avatar>}   
                action={<IconButton aria-label='sidebar'><MoreVertIcon /></IconButton>}
                title={initial.author}
                subheader={date}
                />
                <CardContent className={classes.content}> 
                <Typography variant="body2" color="textSecondary" component="h1">
                {initial.body}
                </Typography>
                </CardContent>
                <Typography className={classes.content} variant="body2" component="h6">Tags: <span className={classes.taging}>{initial.tags}</span></Typography>
                <CardActions>
                    <ThumbUpIcon />
                    <h6>{initial.upvotes_count}</h6>
                    <ThumbDownAltIcon />
                    <h6>{initial.downvotes_count}</h6>
                     <FavoriteIcon /> 
                    <h6>{initial.favorites_count}</h6>
                </CardActions>
                </Card>
                <Button className={classes.MuiButton} onClick={refreshPage} variant="contained" color="primary">New Quote</Button>
        </div>
    )
}

export default Day8;
