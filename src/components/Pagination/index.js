import React, { useState, useEffect } from 'react';
import api from '../../services/api.js'
import './Pagination.sass';
import ButtonsPagination from '../ButtonsPagination'
import { AiOutlineCloseSquare } from 'react-icons/ai'

const Pagination = () => {
    const [user, setUser] = useState();
    const [page, setPage] = useState(1);
    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState(' ');

    function handleNext () {
        let pages = page + 1
        return setPage(pages)
    }

    function handlePrev () {
        if (page > 1){
            let pages = page - 1
            return setPage(pages)
        }
        return page
    }

    const getImg = (imgSrc) => {
        setTempImgSrc( imgSrc );
        setModel(true);
    }
    
    useEffect(() => {
        api
        .get(`/curated?page=${page}&per_page=30`, {
            headers: {
              Authorization: '563492ad6f91700001000001d717ba1d15da4f06bcc63b3eb177e0ba'
            }
           })
        .then(({data}) => {
            setUser(data.photos);
        });
        console.log(user)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    return(
        <>
            <div className={model? "model open" : "model"}>
                <img src={tempimgSrc} />
                <AiOutlineCloseSquare className="close" onClick={() => setModel(false)}/>
            </div>

            <ButtonsPagination className="buttons-top">
                <button onClick={handlePrev}>Prev</button>
                <button onClick={handleNext}>Next</button>
            </ButtonsPagination>
            
            <div className = "images">
                {user?.map((item, index) => (
                        <img className = "pics"
                            key = {index}
                            id={item.id}
                            title={item.photographer}
                            src={item.src['medium']}
                            liker={item.liked}
                            onClick={() => getImg(item.src['large'])} />
                ))}
            </div>
            
            <ButtonsPagination className="buttons-down">
                <button onClick={handlePrev}>Prev</button>
                <button onClick={handleNext}>Next</button>
            </ButtonsPagination>
        </>
    );
}

export default Pagination;
