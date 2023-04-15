import React from "react";
import AvatarPost from "./AvatarPost";
import { useNavigate } from "react-router-dom";
import NameDate from "./NameDate";
import PostContent from "./PostContent";
import LikeIt from "./LikeIt";
import BottomPost from "./BottomPost";

export default function Post({mode, item}) {
  const navigate = useNavigate();

  function goToPostView(id) {
    navigate(`/posts/${id}`);
  }

  return<>
      <article className='card' onClick={() => goToPostView(item.id)}>
        <div className='wrapavatar'>
          <AvatarPost />
          <NameDate />
        </div>
        <PostContent item={item} />
        <LikeIt />
        <BottomPost />
      </article>
  </>
}