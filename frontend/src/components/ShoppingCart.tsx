import { Offcanvas, Stack } from 'react-bootstrap';
import { useRecoilState, useRecoilValue } from 'recoil';
import { shoppingCart, totalSum } from '../recoil/store';
import { formatCurrency } from '../utilities/formatCurrency';
import CartItem from './CartItem';

interface shoppingCartProps {
  closeCart: () => void;
  isOpen: boolean;
}
const ShoppingCart: React.FC<shoppingCartProps> = (
  props: shoppingCartProps,
) => {
  const cart = useRecoilState(shoppingCart)[0];
  return (
    <Offcanvas show={props.isOpen} onHide={props.closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cart.map((item) => (
            <CartItem key={item.id} id={item.id} quantity={item.quantity} />
          ))}
        </Stack>
        <div className="ms-auto fw-bold fs-5">
          Total {formatCurrency(useRecoilValue(totalSum))}
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShoppingCart;
