import React from "react";

export default function PostContent({item}) {
  // console.log('itemmmmm', item)
  return (
    <div className='post'>
      {item.content}
    </div>
  ) 
}