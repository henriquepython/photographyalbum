import React, { useState, useEffect } from 'react';
import api from '../../services/api.js'
import './Pagination.sass';


const Pagination = () => {
    const [user, setUser] = useState();
    const [page, setPage] = useState(1);

    function next () {
        let pages = page + 1
        return setPage(pages)
    }

    function prev () {
        if (page > 1){
            let pages = page - 1
            return setPage(pages)
        }
        return page
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
            <div className="buttons-top">
                <button onClick={prev}>Prev</button>
                <button onClick={next}>Next</button>
            </div>
            <div className = "images">
                {user?.map((item) => (
                    <img className = "item"
                        key = {item.id}
                        id={item.id}
                        title={item.photographer}
                        src={item.src['medium']}
                        liker={item.liked}
                    />
                ))}
            </div>
            <div className="buttons-down">
                <button onClick={prev}>Prev</button>
                <button onClick={next}>Next</button>
            </div>
            </>
    );
}

export default Pagination;
