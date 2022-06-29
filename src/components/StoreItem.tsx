import { Button, Card } from 'react-bootstrap';
import { useRecoilState, useRecoilValue } from 'recoil';
import { formatCurrency } from '../utilities/formatCurrency';
import { shoppingCart, quantityById } from '../recoil/store';

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export default function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const [cart, setCart] = useRecoilState(shoppingCart);
  const quantity = useRecoilValue(quantityById(id));

  const manipulateQuantity = (id: number, operation: number): void => {
    //operation -1 | 1
    //if operation is -1, the quantity decrements
    //if operation is 1, the quantity increments

    let cartCopy = Array.from(cart);

    let product: { id: number; quantity: number } | undefined = cartCopy.find(
      (product) => product.id === id,
    );

    if (product) {
      let index = cart.indexOf(product);
      cartCopy[index] = { id: id, quantity: product.quantity + operation };
      if (cartCopy[index].quantity === 0) {
        cartCopy.splice(index, 1);
      }
    } else {
      cartCopy.push({ id: id, quantity: 1 });
    }

    setCart(cartCopy);
  };

  const removeFromCart = (id: number) => {
    let cartCopy = Array.from(cart);

    let product: { id: number; quantity: number } | undefined = cart.find(
      (product) => product.id === id,
    );

    if (!product) {
      throw new Error('removeFromCart: id was not found in cart');
    }
    cartCopy.splice(cartCopy.indexOf(product), 1);
    setCart(cartCopy);
  };
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
                manipulateQuantity(id, 1);
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
                    manipulateQuantity(id, -1);
                  }}
                >
                  -
                </Button>
                <div>
                  <span className="fs-3">{quantity}</span> in cart
                </div>
                <Button
                  onClick={() => {
                    manipulateQuantity(id, 1);
                  }}
                >
                  +
                </Button>
              </div>
              <Button
                variant="danger"
                size="sm"
                onClick={() => {
                  removeFromCart(id);
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
