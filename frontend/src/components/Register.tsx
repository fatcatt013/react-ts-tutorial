import Axios from 'axios';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { Button } from 'react-bootstrap';

const Register: React.FC<{
  register: boolean;
  setRegister: Dispatch<SetStateAction<boolean>>;
}> = (props) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await Axios.put('http://localhost:90/api/register', {
      email: email,
      password: password,
      username: username,
    });
    alert(res.data['status']);
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
        placeholder="Username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <Button type="submit">Register</Button>
      <Button
        onClick={() => {
          props.setRegister(false);
        }}
      >
        Log In
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

export default Register;
