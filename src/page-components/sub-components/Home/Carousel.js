import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

function IndividualIntervalsExample() {
  return (
    <Carousel className='pos-rel'>
        
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="assets/Images/dl.beatsnoop.com-1650245138.jpg"
          alt="First slide"
        />
        <Carousel.Caption className='carousel-caption d-block text-start about-part-1'>
        <p>The Global Impact Of the War in Ukraine </p>
                    <h1>Resilience amid <br/> Global Crisis</h1>
                    <Link className="learn" to=""><span> Learn More</span> <i className="fa-solid fa-right-long"></i></Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="assets/Images/dl.beatsnoop.com-1650245477.jpg"
          alt="Second slide"
        />
        <Carousel.Caption className='carousel-caption d-block text-start about-part-1'>
        <p className="par">We are <span>Vajrins</span></p>
                    <h1>Amazing, Incredible, <br/> Unbelievable and <span>Invincible </span></h1>
                    <Link className="learn" to=""><span> Learn More</span> <i className="fa-solid fa-right-long"></i></Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="assets/Images/dl.beatsnoop.com-1650245248.jpg"
          alt="Third slide"
        />
        <Carousel.Caption className='carousel-caption d-block text-start about-part-1'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <h1>Lorem ipsum <br/> amet consectetur</h1>
                    <Link className="learn" to=""><span> Learn More</span> <i className="fa-solid fa-right-long"></i></Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;