import { Offcanvas } from 'react-bootstrap';

interface shoppingCartProps {
  closeCart: () => void;
  isOpen: boolean;
}
const ShoppingCart: React.FC<shoppingCartProps> = (
  props: shoppingCartProps,
) => {
  return (
    <Offcanvas show={props.isOpen} onHide={props.closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
    </Offcanvas>
  );
};

export default ShoppingCart;
