import React from 'react'
import css from "../slider/Slider.module.css"
import Video from 'react-player'
// import "../slider/Slider.module.css"

import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function SliderCompo() {

  var settings = {
    dots: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  const sliderVideos = [
    { id: 1, url: "https://res.cloudinary.com/nj1508/video/upload/s--ylNL3ozI--/vc_auto/v1650221047/first-carousel/aprize_vedio1.mp4" },
    { id: 2, url: "https://res.cloudinary.com/nj1508/video/upload/s--skQ9AaSI--/c_fill,eo_10,h_600,so_0.00,vc_auto,w_1300/v1650209225/first-carousel/pexels-max-fischer-5889069_vcf0ie.mp4" },
    { id: 3, url: "https://res.cloudinary.com/nj1508/video/upload/s--ScT5TOqF--/c_fill,eo_10,h_600,so_0.00,vc_auto,w_1300/v1650210655/first-carousel/pexels-gustavo-fring-5836827_hqm6pi.mp4 " },
    { id: 4, url: "https://res.cloudinary.com/nj1508/video/upload/s--uLRdjxEn--/c_fill,eo_10,h_600,so_0.00,vc_auto,w_1300/v1650209309/first-carousel/pexels-max-fischer-5889065_pj9t4r.mp4 " },
  ]

  return (
    <div className='outer-slider'>
        <Slider {...settings}>
          <div className="image-one imagesSlider">
              <video src={"https://res.cloudinary.com/nj1508/video/upload/s--uLRdjxEn--/c_fill,eo_10,h_600,so_0.00,vc_auto,w_1300/v1650209309/first-carousel/pexels-max-fischer-5889065_pj9t4r.mp4"} autoPlay loop muted />
          </div>
          <div className="image-two imagesSlider">
              <video src={"https://res.cloudinary.com/nj1508/video/upload/s--skQ9AaSI--/c_fill,eo_10,h_600,so_0.00,vc_auto,w_1300/v1650209225/first-carousel/pexels-max-fischer-5889069_vcf0ie.mp4"} autoPlay loop muted />
          </div>
          <div className="image-three imagesSlider">
              <video src={"https://res.cloudinary.com/nj1508/video/upload/s--ScT5TOqF--/c_fill,eo_10,h_600,so_0.00,vc_auto,w_1300/v1650210655/first-carousel/pexels-gustavo-fring-5836827_hqm6pi.mp4"} autoPlay loop muted />
          </div>
          <div className="image-four imagesSlider">
              <video src={"https://res.cloudinary.com/nj1508/video/upload/s--uLRdjxEn--/c_fill,eo_10,h_600,so_0.00,vc_auto,w_1300/v1650209309/first-carousel/pexels-max-fischer-5889065_pj9t4r.mp4"} autoPlay loop muted />
          </div>
        </Slider>
    </div>

  )
}
