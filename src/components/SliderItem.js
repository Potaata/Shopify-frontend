import React from 'react'

export default function SliderItem({ subtitle, title, bgClass, prevSlide, nextSlide  }) {
    return (
      <div className={`single-homepage-slider ${bgClass}`}>
      <div className="container">
      <div className="row">
        <div className="col-md-12 col-lg-7 offset-lg-1 offset-xl-0">
          <div className="hero-text">
            <div className="hero-text-tablecell">
              <p className="subtitle">{subtitle}</p>
              <h1>{title}</h1>
              {/* <button className="transparent-button prev-button" onClick={prevSlide}>prev &#10094;</button>
                <button className="transparent-button next-button" onClick={nextSlide}>next &#10095;</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
