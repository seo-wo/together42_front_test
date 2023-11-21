import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const LoginCallback = () => {
  const { token } = useParams();
  useEffect(() => {
    console.log('LoginSucess', token);
    const message = {
      type: 'access_token',
      content: token,
    }
    if (window.opener){
      window.opener.postMessage(message, 'http://localhost:3000');
      window.close();
    }
  }, []);
  return (
    <div>
      <h1>LoginSucess</h1>
      <p>test</p>
    </div>
  )
}

export default LoginCallback;
