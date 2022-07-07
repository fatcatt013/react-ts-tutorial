import { Button, Card } from 'react-bootstrap';
import { useRecoilState, useRecoilValue } from 'recoil';
import { formatCurrency } from '../utilities/formatCurrency';
import { shoppingCart, quantityById } from '../recoil/store';
import { manipulateQuantity, removeFromCart } from '../functions';

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export default function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const [cart, setCart] = useRecoilState(shoppingCart);
  const quantity = useRecoilValue(quantityById(id));

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: 'cover' }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4 ">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button
              className="w-100"
              onClick={() => {
                manipulateQuantity(cart, id, 1, setCart);
              }}
            >
              +Add to cart
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: '0.5rem' }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: '0.5rem' }}
              >
                <Button
                  onClick={() => {
                    manipulateQuantity(cart, id, -1, setCart);
                  }}
                >
                  -
                </Button>
                <div>
                  <span className="fs-3">{quantity}</span> in cart
                </div>
                <Button
                  onClick={() => {
                    manipulateQuantity(cart, id, 1, setCart);
                  }}
                >
                  +
                </Button>
              </div>
              <Button
                variant="danger"
                size="sm"
                onClick={() => {
                  removeFromCart(cart, setCart, id);
                }}
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
