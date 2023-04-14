import React, { useState, useEffect } from "react";
import Post from "./Post";

export default function Posts() {
  
  const [allPosts, setAllPosta] = useState([]);
  const [loading, setLoading] = useState('true');
  const path = 'POSTS';

  useEffect(() => {
    const url = 'http://localhost:7070/posts';
    

    const fff = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setAllPosta(data);
        setLoading(false);
      } catch (err) {
        console.error(err)
      }
    }
    fff();
  } ,[]);

  return<>
    <h1 style={{color: 'red', fontSize: 88}}>{ (loading) && '...Loading' }</h1>
    {allPosts.map((i) => <Post path={path} item={i} key={i.id}/>)}
  </>
}
