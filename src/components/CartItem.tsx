import { removeFromCart } from '../functions';
import storeItems from '../data/items.json';
import { Button, Stack } from 'react-bootstrap';
import { formatCurrency } from '../utilities/formatCurrency';
import { shoppingCart } from '../recoil/store';
import { useRecoilState } from 'recoil';

interface cartItemProps {
  id: number;
  quantity: number;
  key: number;
}

const CartItem: React.FC<cartItemProps> = (props: cartItemProps) => {
  const item = storeItems.find((i) => i.id === props.id);
  const [cart, setCart] = useRecoilState(shoppingCart);
  if (item == null) return null;
  return (
    <Stack
      direction="horizontal"
      gap={2}
      className="d-flex align-items-center "
    >
      <img
        src={item.imgUrl}
        style={{ width: '125px', height: '75px', objectFit: 'cover' }}
      />
      <div className="me-auto">
        <div>
          {item.name}{' '}
          {props.quantity > 1 ? (
            <span className="text-muted" style={{ fontSize: '.65rem' }}>
              {props.quantity}x
            </span>
          ) : null}
          <div className="text-muted" style={{ fontSize: '0.75rem' }}>
            {formatCurrency(item.price)}
          </div>
        </div>
      </div>
      <>
        <div>{formatCurrency(item.price * props.quantity)}</div>
        <Button
          variant="outline-danger"
          size="sm"
          onClick={() => removeFromCart(cart, setCart, props.id)}
        >
          &times;
        </Button>
      </>
    </Stack>
  );
};

export default CartItem;
