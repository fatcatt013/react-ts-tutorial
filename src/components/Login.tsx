import React, { Dispatch, SetStateAction, useState } from 'react';
import { Button } from 'react-bootstrap';
import Axios from 'axios';
import { SetterOrUpdater, useRecoilState } from 'recoil';
import { loginData } from '../recoil/store';

const Login: React.FC<{
  register: boolean;
  setRegister: Dispatch<SetStateAction<boolean>>;
}> = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginInfo, setLoginInfo] = useRecoilState(loginData);

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await Axios.post('http://localhost:5000/login', {
      email: email,
      password: password,
    });
    setLoginInfo({ logged: true, ...res.data });
    console.log(loginInfo);
    debugger;
  };

  return (
    <form
      action=""
      style={styles.form}
      onSubmit={(e) => {
        submitForm(e);
      }}
    >
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        testid="login-email-input"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        testid="login-password-input"
      />
      <Button type="submit">Log In</Button>
      <Button
        onClick={() => {
          props.setRegister(true);
        }}
      >
        Register
      </Button>
    </form>
  );
};

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
};

export default Login;
