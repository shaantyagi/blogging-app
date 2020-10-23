import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import {getComments, deletePost, getPost} from '../Api/getApi';
import { Link, useLocation} from 'react-router-dom';

const PostDetail = () => {
    const [comments, setComments] = useState([]);
    const [post,setPost]= useState([]);
    const [display, setDisplay] = useState(false);
    const location = useLocation();
    let allid=location.pathname.split('/');
    let postid = allid[allid.length-3];
    let userid = allid[allid.length-1];
    useEffect(() =>{
        getComments(postid)
        .then((data) => {
          setComments(data);
        })
        .catch((error) => alert("Comments not found :",error));

        getPost(postid)
        .then((data) => {
          setPost(data);
        })
        .catch((error) => alert("Post not found :",error));
    },[postid]);
    //Click event for deleting post
    const handleClickDelete = (id) => {
        deletePost(id)
      };
    
    //Click event for displaying comments
    const handleClickComment = () => {
        setDisplay(true);
      };
    return (
        <div>
            <h2>PostDetail Page</h2>
            <h3>Title: {post.title}</h3>
            <h3>Body: {post.body}</h3>
            <h2>Comments:</h2>
            {display ? comments.map((comment) => (
            <h5 key={comment.id}>{comment.body}</h5>
            )) : null}
            <Button onClick={()=>{
                  handleClickComment()
                  }}>Get Comments</Button>
            <Button onClick={()=>{
                  handleClickDelete(postid);
                  }}><Link to={`/Posts/${userid}`}>Delete Post</Link></Button>
        </div>
    );
};

export default PostDetail;