import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import Post from "./Post";

export default function PostView() {
  const [post, setPost] = useState({ id: 1000, content: 'VVVVVVVVV'});
  const [loading, setLoading] = useState(true);
  const { postId } = useParams();

  const URL = 'http://localhost:7070/posts';
  
  useEffect(() => {
    const fnFetch = async () => {
      try {
        const response = await fetch(`${URL}/${postId}`);
        const data = await response.json();
        console.log('=== data', data);
        setLoading(false);
        setPost(data.post);
      } catch(error) {
        console.error(error);
      }
    }
    fnFetch();
  },[])

  function TempComp({post}) {
    console.log('ITEM ', post.id);
    return 'K' + post.id;
  }
  
  console.log('loading', loading)
  return <>
      <h1 style={{color: 'red', fontSize: 88}}>{ (loading) && '...Loading' }</h1>
      {/* {(!loading) && `ID=${post.id} CONTENT: ${post.content}`} */}
      {/* <h2>{!loading && <TempComp post={post} />}</h2> */}
      <Post mode='edit' item={post} />
  </>
}