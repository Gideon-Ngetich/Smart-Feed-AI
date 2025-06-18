import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
const onFinish = values => {
  console.log('Success:', values);
};
const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};
const Register = () => (
  <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600, marginTop: 16 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="First-name"
      name="firstName"
      rules={[{ required: true, message: 'Please input your first name!' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Last-name"
      name="lastName"
      rules={[{ required: true, message: 'Please input your last name!' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="phone-number"
      name="phoneNumber"
      rules={[{ required: true, message: 'Please input your phone number!' }]}
      >
      <Input />
    </Form.Item>
    <Form.Item
      label="Email"
      name="email"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item name="remember" valuePropName="checked" label={null}>
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item label={null}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);
export default Register;