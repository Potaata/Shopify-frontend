import React,  { useEffect } from 'react';
import pixel from '../images/pixelUnion.png';
import troop from '../images/troop.png';
import sb from '../images/outOfSB.jpg';

const Associates = () => {
    useEffect(() => {
      const swiperWrapper = document.querySelector('.associate-slider .swiper-wrapper');
      if (swiperWrapper) {
        const clonedImages = [pixel, troop, sb].map(imageSrc => {
          const img = document.createElement('img');
          img.src = imageSrc;
          img.className = 'img-fluid associate-image swiper-slide';
          return img;
        });
        swiperWrapper.append(...clonedImages);
      }
    }, []);


  return (
    <section id="associate" className="associate">
      <div className="container-fluid" data-aos="zoom-in">
        <div className="row justify-content-center align-items-center">
          <div className="col-auto">
            <img src={pixel} className="img-fluid associate-image" alt="" style={{ marginRight: '60px' }} />
          </div>
          <div className="col-auto">
            <img src={troop} className="img-fluid associate-image" alt="" style={{ marginRight: '60px' }} />
          </div>
          <div className="col-auto">
            <img src={sb} className="img-fluid associate-image" alt="" />
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
};

export default Associates;
