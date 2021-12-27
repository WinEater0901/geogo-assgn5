import React, {useState, useEffect} from "react";
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import CommentIcon from '@material-ui/icons/Comment'



import avatarImage from './logo.svg'

const useStyles = makeStyles({
	media: {
		height: 0,
		paddingTop: '50%',
	},
})


const PostCard = (props) => {
    const { Title,Description}=props
    const { media } = useStyles()
    const [posts,setData]=useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/posts')
        .then((response)=> {
            setData(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
    },[])
    console.log(posts)
	return (

		<Card>
			<CardHeader
				avatar={<Avatar src={avatarImage} />}
				title='Vineet M Bhat'
				subheader={new Date().toDateString()}
				action={
					<IconButton>
						{<MoreVertIcon />}
					</IconButton>
				}
			/>
			
			<CardContent>
				<Typography variant='body2' color='textSecondary' component='p'></Typography>
                <h1>{Title}</h1>
        <h2>{Description}</h2>
        <h1>Assignment-5</h1>
		<div>
			      <hr />
		</div>
        { posts.map(post => (
            <>
			
			<div>
				
				<CardHeader
				avatar={<Avatar src={post.path} />}
				title={post.author}
				subheader={new Date().toDateString()}
				action={
					<IconButton>
						{<MoreVertIcon />}
					</IconButton>
				}
			   />
			   <div>
			     <CardMedia
                    component="img"
					height="194"
					image="https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
					
					
                 />
	              <h3>{post.title}</h3>
				  <h3>{post.content}</h3>

			  </div>
			  
			</div>
			  
			<div>
					<CardActions disableSpacing>
						<IconButton>
							<FavoriteIcon />
						</IconButton>
						<IconButton>
							<CommentIcon />
						</IconButton>
						<IconButton>
							<ShareIcon />
						</IconButton>
						<MoreVertIcon></MoreVertIcon>
					</CardActions>
				</div>
				<div>
			      <hr />
			  </div>
			</>
			   
            ))}
			</CardContent>

            
		</Card>
		
	)}

export default PostCard