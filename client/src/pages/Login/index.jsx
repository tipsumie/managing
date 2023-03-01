import React from 'react';
import styled from 'styled-components';
import { Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const apiUrl = import.meta.env.VITE_BASE_URL;

const Login = () => {
  const navigate = useNavigate();
  
  const onFinish = async (values) => {
    try {
      const response = await axios.post(`${apiUrl}/login`, values);
      console.log('first',apiUrl)
      console.log("Response",response)
      if (response.data) {
        alert('Login Successfully!');
        navigate('/');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <LoginPageContainer>
      <LoginForm
        name='register'
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <h1 style={{ textAlign: 'center' }}>Login</h1>
        <Form.Item
          name='email'
          rules={[
            {
              type: 'email',
              message: 'The input is not a valid email address',
            },
            { required: true, message: 'Please input your email' },
          ]}
        >
          <Input placeholder='Email' />
        </Form.Item>

        <Form.Item
          name='password'
          rules={[{ required: true, message: 'Please input your password' }]}
        >
          <Input.Password placeholder='Psassword' />
        </Form.Item>

        <Form.Item
          name='confirm'
          dependencies={['password']}
          rules={[
            { required: true, message: 'Please confirm your password' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error('The two passwords that you entered do not match')
                );
              },
            }),
          ]}
        >
          <Input.Password placeholder='Confirm Password' />
        </Form.Item>

        <p>
       {` New to an account ?   `}
          <StyledLink to='/register' className='accout'>
          {` Create an account`}
          </StyledLink>
        </p>

        <Form.Item>
          <LoginButton htmlType='submit' block>
            Login
          </LoginButton>
        </Form.Item>
      </LoginForm>
    </LoginPageContainer>
  );
};

export default Login;

const LoginPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #e5d2e0;
`;

const LoginForm = styled(Form)`
  width: 300px;
`;

const LoginButton = styled(Button)`
  background-color: #8427db;
  border-color: #8427db;
  color: #ffff;

  &:hover {
    background-color: ##8427db;
    border-color: ##8427db;
    color: #ffff !important;
  }
`;

const StyledLink = styled(Link)`

  &:hover {
    color: #f3713d;
  }
`;
