import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Directory() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="http://www.caninetofive.com/wp-content/uploads/2019/05/dogs-on-playground.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Registry</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://ferndogtraining.com/wp-content/uploads/2017/03/Daycare-post-feature-image-1-1080x628.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Calendar</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.squarespace-cdn.com/content/v1/5f0113c09fa198769d83685e/1594147110983-IH286INELGL3FN7UYRSH/image-asset.jpeg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>New Profile</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Directory;