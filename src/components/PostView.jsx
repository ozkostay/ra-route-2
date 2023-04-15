import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import AvatarPost from "./AvatarPost";
import NameDate from "./NameDate";
import PostContent from "./PostContent";
import LikeIt from "./LikeIt";
import BottomView from "./BottomView";
import PostEdit from "./PostEdit";


export default function PostView() {
  const [post, setPost] = useState({ id: 1000, content: 'VVVVVVVVV'});
  const [loading, setLoading] = useState(true);
  const [mode, setMode] = useState();
  const { postId } = useParams();
  
  // console.log('=====MMMMMMMMMMMM',item);

  const URL = 'http://localhost:7070/posts';
  
  useEffect(() => {
    const fnFetch = async () => {
      try { 
        const response = await fetch(`${URL}/${postId}`);
        const data = await response.json();
        // console.log('=== data', data);
        setLoading(false);
        setPost(data.post);
      } catch(error) {
        console.error(error);
      }
    }
    fnFetch();
  },[])

  function fnEdit() {
    setMode('edit');
  }
  // console.log('loading', loading)
  return (
    <>
    <h1 style={{color: 'red', fontSize: 88}}>{ (loading) && '...Loading' }</h1>
    {(!loading) && (!mode) &&
      <article className='card'>
        <div className='wrapavatar'>
          <AvatarPost />
          <NameDate />
         </div>
        <PostContent item={post}/>
        <LikeIt />
        <BottomView fnEdit={fnEdit}/>
      </article>
    }
    {(!loading) && (mode) &&
      <article className='card'>
        <PostEdit item={post}/>
      </article>
    }
    </>
  )
      
          // <Post mode='edit' item={post} />}
 
  
}