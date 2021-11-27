import React from 'react';
import './Albumview.sass';
import { useState } from 'react';
import Slider from 'react-slick';
import foto1 from '../../assets/foto1.jpg'
import foto2 from '../../assets/foto2.jpg'
import foto3 from '../../assets/foto3.jpg'

//importar imagens aqui e colocar no array abaixo

const images = [ foto1, foto2, foto3 ]

const AlbumView = () => {

    const [imageIndex, setImageIndex] = useState(0);

    const settings = {
        infinite: true,
        lazyload: true,
        speed: 500,
        slidesToShow: 1,
        slidestoScroll: 1,
        centerMode: true,
        centerPadding: 0,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        beforeChange: (current, next) => setImageIndex(next),
        };

    return(
        <div className = "slides">
            <Slider {...settings}>
                {images.map((img, idx) => (
                    <div className = { idx === imageIndex ? "slide activeSlide" : "slide"}>
                        <img src={img} alt={img} />
                    </div>    
                 ))}
            </Slider>
        </div>
    );
}

export default AlbumView;