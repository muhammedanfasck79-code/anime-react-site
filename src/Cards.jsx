import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';

function Cards(props) {
  const [cart, setCart] = useState(true);

  function changeCart() {
    setCart(false);
  }

  return (
    <div className='col-12 col-md-6 col-lg-4 mt-5'>
      <Card style={{ width: '100%' }}>
        <div className="text-center mt-3">
          <img 
            src={props.image} 
            alt="Product" 
            style={{ width: '120px', height: '120px', objectFit: 'contain' }} 
          />
        </div>
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>₹ {props.price}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>

        {
          cart 
            ? <Button variant="danger" onClick={changeCart}>Add to cart</Button> 
            : <Button variant="success">Go to cart</Button>
        }
      </Card>
    </div>
  );
}

export default Cards;
