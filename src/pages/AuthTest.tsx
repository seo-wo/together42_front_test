import React from 'react';
import { Cookies } from 'react-cookie';
import { api } from '../Axios';

const cookies = new Cookies();

const AuthTest = () => {
  const handleCheck = async () => {
    const token = cookies.get('accessToken');
    if (!token){
      console.error('로그인이 필요합니다.');
      return;
    }
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    try {
      const response = await api.get('/user/test');
      console.log(response.data);
    } catch(error) {
      console.error('Check login error:', error);
    }
  }
  return (
    <div>
      <button onClick={handleCheck}>로그인 확인</button>
    </div>
  );
}

export default AuthTest;