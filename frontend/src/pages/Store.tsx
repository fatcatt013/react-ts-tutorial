import { Col, Row } from 'react-bootstrap';
import StoreItem from '../components/StoreItem';
import { storeItems } from '../recoil/store';

export default function Store() {
  return (
    <div>
      <h1 style={{ marginBottom: '2rem' }}>Store</h1>
      <Row md={2} xs={1} lg={3} className="store-contents g-3">
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
