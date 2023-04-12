import React, { useState, useEffect } from "react";
import Post from "./Post";

export default function Posts() {
  
  const [allPosts, setAllPosta] = useState([]);

  useEffect(() => {
    const url = 'http://localhost:7070/posts';
    fetch(url)
    .then((response) => {
      console.log('response from FETCH ', response);
      return response.json()
    })
    .then((data) => setAllPosta(data))
    .catch((error) => {
      console.log('! ERROR FETCH', error);
    })
    .finally()
  } ,[])

  return<>
    {allPosts.map((i) => <Post item={i} key={i.id}/>)}
    {/* <Post />
    <Post />
    <Post /> */}
  </>
}