import { Button, Checkbox, Form, Input ,Col, Divider, Row } from 'antd';
import React, { useState } from 'react';
import { loginWithEmailPass ,logoutEmailUser} from "../auth/fbeauth";

const Login = () => {
  const [loggedin,setLogggedIn] = useState(false);
  const onFinish = (values) => {
    console.log(values)    
    loginWithEmailPass(values.username, values.password);
    console.log('Success:', values);
    setLogggedIn(true);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  
 
  return (
   
    <>{ !loggedin ?
    <div 
    style={{ width: "30%" , 
    minWidth:"30em",
    "alignContent":"left",
    "textAlign":"left"}}>
    <Form
      name="basic"
      labelCol={{
        span: 10,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item 
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}      
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >       
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div> : ''
    }
    </>
  );
};

export default Login;