import React, { useState, useEffect } from 'react';

export default function useFetcher(url, opts) {
  
  // const [resp, setResp] = useState('');
  
  // let postObj = {
  //   content: 'Smith DDDDDDDDDDDD'
  // };
  // console.log('result!!! in FETCH 5555555555', url);
  
  // useEffect(() => {
  //   fetch(url, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json;charset=utf-8'
  //     },
  //     body: JSON.stringify(postObj)
  //   })
  //   .then((response) => {
  //     console.log('response from FETCH ', response);
  //     // if (!response.ok) {
  //     //   setError(`Ошибка ${response.status} ${response.statusText} `);
  //     // }
  //     // return response.json()
  //     setResp(response.status);
  //   })
  //   // .then((data) => setData(data))
  //   .catch((error) => {
  //     console.log('!!! ERROR FETCH', error);
  //     // setError(error)
  //   })
  //   .finally()
  // },[]);

  // // const fff = asinc () => {
  // //   let response = await 
    
  // //   let result = await response.json();
  // //   console.log('result!!! in FETCH', result.message);
  // // }

  // // fff();

  // return resp;
}

