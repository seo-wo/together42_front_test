import React, { useCallback, useEffect } from 'react';
import { Cookies} from 'react-cookie';

const cookies = new Cookies()
const GoogleLogin = () => {
  const url: string = "http://localhost:4242/api/auth/google";

  const handleLoginCallback = useCallback((event: MessageEvent) => {
    console.log('event', event);

    if (event.origin !== 'http://localhost:3000') {
      return;
    }

    const { data } = event;
    console.log('data', data);

    if (data.type === 'access_token') {
      const { content } = data;
      console.log('accessToken', content);
      cookies.set('accessToken', content, { path: '/' });
    }
  }, []);

  const handleLogin = useCallback((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    const width = 500;
    const height = 600;
    const left = window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - (width / 2);
    const top = window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - (height / 2);
    const features: string = `width=${width},height=${height},left=${left},top=${top}`;
    const popup: Window | null = window.open(url, 'Google Login', features);
    if (popup) {
      popup.focus();
      window.addEventListener('message', handleLoginCallback);
    }
  }, [handleLoginCallback]);

  useEffect(() => {
    return () => {
      window.removeEventListener('message', handleLoginCallback);
    };
  }, [handleLoginCallback]);

  return (
    <div>
      <button onClick={handleLogin}>Google Login</button>
    </div>
  );
};

export default GoogleLogin;