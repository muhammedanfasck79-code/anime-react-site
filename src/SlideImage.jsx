
import Carousel from 'react-bootstrap/Carousel';

function SlideImage() {
  return (
    <Carousel interval={3000}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/311011_0_kkz3sd.png"
          alt="First slide"
          style={{ maxWidth: '600px', margin: 'auto' }}
        />
        <Carousel.Caption>
          <p>VIVO</p>
          <h3 style={{ color: 'green' }}></h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/317418_0_meob1I3_T.png"
          alt="Second slide"
          style={{ maxWidth: '600px', margin: 'auto' }}
        />
        <Carousel.Caption>
          <p>I PHONES</p>
          <h3 style={{ color: 'green' }}></h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/308333_0_rflzvo.png"
          alt="Third slide"
          style={{ maxWidth: '600px', margin: 'auto' }}
        />
        <Carousel.Caption>
          <p>NOTHING</p>
          <h3 style={{ color: 'green' }}></h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default SlideImage;
