import { Layout, Card } from "antd";
import { Button, Checkbox, Form, Input, Col, Divider, Row } from "antd";
import React, { useState } from "react";
import { loginWithEmailPass, logoutEmailUser } from "../auth/fbeauth";

import Employee from "../table";
const FormItem = Form.Item;

const { Content } = Layout;
const Login = () => {
  const [loggedin, setLogggedIn] = useState(false);
  const onFinish = (values) => {
    console.log(values);
    loginWithEmailPass(values.username, values.password);
    console.log("Success:", values);
    setLogggedIn(true);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      {!loggedin ? (
        <Content>
          <div>
            <Row>
              <Col xs={{ span: 2, offset: 1 }} lg={{ span: 2, offset: 1 }}>
                &nbsp;
              </Col>
              <Col xs={{ span: 20, offset: 1 }} lg={{ span: 10, offset: 1 }}>
                <div
                  style={{
                    width: "30%",
                    minWidth: "30em",
                    alignContent: "left",
                    textAlign: "left",
                  }}
                >
                  <div style={{ textAlign: "center" }}>
                    <h3>Login</h3>
                  </div>
                  <Form
                    name="basic"
                    labelCol={{
                      span: 5,
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
                    <FormItem
                      label="Username"
                      name="username"
                      rules={[
                        {
                          required: true,
                          message: "Please input your username!",
                        },
                      ]}
                    >
                      <Input />
                    </FormItem>

                    <FormItem
                      label="Password"
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: "Please input your password!",
                        },
                      ]}
                    >
                      <Input.Password />
                    </FormItem>

                    <FormItem
                      name="remember"
                      valuePropName="checked"
                      wrapperCol={{
                        offset: 2,
                        span: 16,
                      }}
                    ></FormItem>

                    <FormItem
                      wrapperCol={{
                        offset: 2,
                        span: 16,
                      }}
                    >
                      <Button type="primary" htmlType="submit">
                        Submit
                      </Button>
                    </FormItem>
                  </Form>
                </div>
              </Col>
              <Col xs={{ span: 2, offset: 1 }} lg={{ span: 2, offset: 1 }}>
                &nbsp;
              </Col>
            </Row>
          </div>
        </Content>
      ) : (
        <Employee />
      )}
    </>
  );
};

export default Login;
