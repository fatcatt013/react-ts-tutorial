import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { SetterOrUpdater } from 'recoil';
import Login from '../components/Login';
import Register from '../components/Register';

const Authentication = () => {
  const [register, setRegister] = useState(false);

  return (
    <Container style={styles.container}>
      {register ? (
        <Register register={register} setRegister={setRegister} />
      ) : (
        <Login register={register} setRegister={setRegister} />
      )}
    </Container>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
    alignItems: 'center',
  },
};

export default Authentication;
