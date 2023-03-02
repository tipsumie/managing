import React from 'react';
import styled from 'styled-components';
import { Form, Input, Button } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const apiUrl = import.meta.env.VITE_BASE_URL;

const Register = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const response = await axios.post(`${apiUrl}/register`, values);
      if (response.data) {
        navigate('/login');
      }
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <RegisterPageContainer>
      <RegisterForm
        name='register'
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <h1 style={{ textAlign: 'center' }}>Register</h1>
        <Form.Item
          name='username'
          rules={[
            { type: 'username', message: 'The input is not a valid' },
            { required: true, message: 'Please input your name' },
          ]}
        >
          <Input placeholder='username' />
        </Form.Item>
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

        <Form.Item>
          <RegisterButton htmlType='submit' block>
            Register
          </RegisterButton>
        </Form.Item>
      </RegisterForm>
    </RegisterPageContainer>
  );
};

export default Register;

const RegisterPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #e5d2e0;
`;

const RegisterForm = styled(Form)`
  width: 300px;
`;

const RegisterButton = styled(Button)`
  background-color: #8427db;
  border-color: #8427db;
  color: #ffff;

  &:hover {
    background-color: ##8427db;
    border-color: ##8427db;
    color: #ffff !important;
  }
`;
