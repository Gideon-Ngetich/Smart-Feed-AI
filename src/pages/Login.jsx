// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Login({ onLogin }) {
//     const [firstName, setFirstName] = useState('');
//     const [lastName, setLastName] = useState('');
//     const [phone, setPhone] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage('');

//     if ( !firstName|| !lastName||!email || !password) {
//       setMessage('Fill in the fields');
//       return;
//     }

//     try {
//       const response = await fetch('http://localhost:3000/api/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({firstName, lastName, email, password }),
//       });

//       const data = await response.json();

//       if (data.success) {
//         localStorage.setItem('user', data.user.email);
//         onLogin();
//         navigate('/dashboard');
//       } else {
//         setMessage('Invalid credentials');
//       }
//     } catch (error) {
//       console.error('Login error:', error);
//       setMessage('An error occurred. Please try again.');
//     }
//   };

//   return (
//     <div className="auth-page">
//       <div className="auth-container">
//         <h2>Login</h2>
//         {message && <p style={{ color: 'red' }}>{message}</p>}
//         <form onSubmit={handleSubmit}>
//             <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
//             <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
//           <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//           <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//           <button type="submit">Login</button>
//         </form>
//         <p>Don't have an account? <a href="/register">Register</a></p>
//       </div>
//     </div>
//   );
// }

// export default Login;

import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import '../css/login.css'
const onFinish = values => {
  console.log('Success:', values);
};
const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};
const Login = () => (
  <div
    style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#f5f5f5',
    }}
  >
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{
        maxWidth: 480, // Increased width
        width: '100%',
        padding: 100, // Increased padding
        background: '#fff',
        borderRadius: 10, // Slightly larger radius
        boxShadow: '0 4px 16px rgba(0,0,0,0.12)', // Slightly stronger shadow
        fontSize: 18, // Larger font
      }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your username!' }]}
        style={{ fontSize: 18 }}
      >
        <Input size="large" />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
        style={{ fontSize: 18 }}
      >
        <Input.Password size="large" />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" label={null}>
        <Checkbox style={{ fontSize: 16 }}>Remember me</Checkbox>
      </Form.Item>

      <Form.Item label={null}>
        <Button type="primary" htmlType="submit" style={{ width: '100%', height: 48, fontSize: 18 }}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  </div>
);
export default Login;