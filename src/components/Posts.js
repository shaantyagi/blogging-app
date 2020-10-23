import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import {Link, useLocation} from 'react-router-dom';
import {getUserPosts} from '../Api/getApi';

//Getting the posts of user based on user id
const Posts = () => {
    const [posts,setPosts]= useState([]);
    const location = useLocation();
    let userid=location.pathname.split('/');
    userid= userid[userid.length-1];
   useEffect(() => {
    getUserPosts(userid).then((data) => {
        setPosts(data);
      }).catch((error) => alert(error));
     }, [userid]);
    return (
        
        <div>
            <h2>Posts</h2>
            {posts.map((post) => (
                <div key={post.id} className="div-post">
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                <Button><Link to={`/postDetail/${post.id}/comments/${userid}`}>Details</Link></Button>
                </div>
            ))}
        </div>
        
    );
}

export default Posts;