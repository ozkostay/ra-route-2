import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Post from "./Post";

export default function Posts() {
  
  const [allPosts, setAllPosts] = useState([]);
  const [loading, setLoading] = useState('true');
  const path = 'POSTS';
  const navigate = useNavigate();

  useEffect(() => {
    const url = 'http://localhost:7070/posts';
    
    const fnFetch = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setAllPosts(data);
        setLoading(false);
      } catch (err) {
        console.error(err)
      }
    }
    fnFetch();
  } ,[]);

  // function goOnPostsId() {
  //   navigate("/posts/");
  // }

  return<>
    <h1 style={{color: 'red', fontSize: 88}}>{ (loading) && '...Loading' }</h1>
    {allPosts.map((i) => <Post mode='list' item={i} key={i.id}/>)}
  </>
}
