import React from 'react';
import './Albumview.sass';
import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import api from '../../services/api.js';


const AlbumView = () => {
    const [user, setUser] = useState();

    useEffect(() => {
        api
        .get('/curated?page=2&per_page=40', {
            headers: {
              Authorization: '563492ad6f91700001000001d717ba1d15da4f06bcc63b3eb177e0ba'
            }
           })
        .then(({data}) => {
            setUser(data.photos);
        });
        console.log(user)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
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
        autoplaySpeed: 2000,
        cssEase: "linear",
        beforeChange: (current, next) => setImageIndex(next),
        };

    return(
        <div className = "slides">
            <Slider {...settings}>
                {user?.map((item, idx) => (
                    <div className = { idx === imageIndex ? "slide activeSlide" : "slide"}>
                        <img
                        key = {item.id}
                        id={item.id}
                        title={item.photographer}
                        src={item.src['large2x']}
                        liker={item.liked}
                    />
                    </div>    
                 ))}
            </Slider>
        </div>
    );
}

export default AlbumView;