import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const slideImages = [
  {
    id: 1,
    url: 'https://i.ibb.co/Lp182rs/mehdi.jpg',
    caption: 'Slide 1',
  },
  {
    id: 2,
    url: 'https://i.ibb.co/Lp182rs/mehdi.jpg',
    caption: 'Slide 2',
  },
  {
    id: 3,
    url: 'https://i.ibb.co/Lp182rs/mehdi.jpg',
    caption: 'Slide 3',
  },
];

function Slideshow() {
  return (
    <div>
      <Slide easing="ease">
        {slideImages.map((slide, index) => (
          <div key={slide}>
            <div style={{ backgroundImage: `url(${slideImages[index]})` }}>
              <span>
                Slide
                {index + 1}
              </span>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
}
export default Slideshow;
