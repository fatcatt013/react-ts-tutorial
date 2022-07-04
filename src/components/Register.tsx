import React, { Dispatch, SetStateAction } from 'react';
import { Button } from 'react-bootstrap';

const Register: React.FC<{
  register: boolean;
  setRegister: Dispatch<SetStateAction<boolean>>;
}> = (props) => {
  return (
    <form action="" style={styles.form}>
      <input type="text" placeholder="Username" />
      <input type="text" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <Button>Register</Button>
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
