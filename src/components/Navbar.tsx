import { Button, Container, Nav, Navbar as BSNavbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { quantitySum } from '../recoil/store';

export default function Navbar() {
  const cartQuantitySum = useRecoilValue(quantitySum);

  return (
    <BSNavbar sticky="top" className="bg-white shadow mb-3">
      <Container>
        <Nav>
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        <div>
          <Button
            style={{
              width: '3.5rem',
              height: '3.5rem',
              border: 'none',
              position: 'relative',
            }}
            variant="outline-primary"
            className="rounded-circle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 377.73 377.73"
            >
              <g>
                <path
                  d="M349.649,95.221c1.766-7.482,0.043-15.229-4.728-21.257c-4.771-6.028-11.916-9.485-19.603-9.485H87.487L76.729,19.226
		C74.037,7.906,64.046,0,52.431,0c-1.942,0-3.896,0.23-5.807,0.686c-13.412,3.188-21.728,16.693-18.54,30.106l55.411,233.916
		c2.677,11.343,12.683,19.262,24.333,19.262h177.489c11.65,0,21.655-7.919,24.331-19.258L349.649,95.221z M265.531,233.969H127.615
		l-28.199-119.49h194.315L265.531,233.969z"
                />
                <circle cx="140.136" cy="342.742" r="34.989" />
                <circle cx="254.701" cy="342.742" r="34.989" />
              </g>
            </svg>
            {cartQuantitySum > 0 ? (
              <div
                className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                style={{
                  color: 'white',
                  width: '1.5rem',
                  height: '1.5rem',
                  bottom: 0,
                  right: 0,
                  position: 'absolute',
                }}
              >
                {cartQuantitySum}
              </div>
            ) : null}
          </Button>
        </div>
      </Container>
    </BSNavbar>
  );
}
