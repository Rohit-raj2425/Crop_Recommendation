import React from 'react'
import {Carousel} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../images/agro_1.jpg'
import img2 from '../images/agro_2.jpg'
import img3 from '../images/agro_3.jpg'
import img4 from '../images/agro_10.jpeg'
import img5 from '../images/agro_5.jpeg'
import img6 from '../images/agro_6.jpg'
import img7 from '../images/agro_7.jpg'
import img8 from '../images/agro_8.jpg'

function imageslider()
{
    return(
        <div>
            
            
            <Carousel>
              <Carousel.Item>
                  <img src={img1} height="500px" width="100%" alt="img1"/>
              </Carousel.Item>
              <Carousel.Item>
                  <img src={img2} height="500px" width="100%" alt="img1"/>
              </Carousel.Item>
              <Carousel.Item>
                  <img src={img3} height="500px" width="100%" alt="img1"/>
              </Carousel.Item>
              <Carousel.Item>
                  <img src={img4} height="500px" width="100%" alt="img1"/>
              </Carousel.Item>
              <Carousel.Item>
                  <img src={img5} height="500px" width="100%" alt="img1"/>
              </Carousel.Item>
              <Carousel.Item>
                  <img src={img6} height="500px" width="100%" alt="img1"/>
              </Carousel.Item>
              <Carousel.Item>
                  <img src={img7} height="500px" width="100%" alt="img1"/>
              </Carousel.Item>
              <Carousel.Item>
                  <img src={img8} height="500px" width="100%" alt="img1"/>
              </Carousel.Item>
            </Carousel>
            
        </div>
    )
}
export default imageslider;