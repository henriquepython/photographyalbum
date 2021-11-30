import React, { useState, useEffect } from 'react';
import ButtonPagination from '../ButtonPagination';
import api from '../../services/api.js'
import './Pagination.sass';


const Pagination = () => {
    const [user, setUser] = useState();

    useEffect(() => {
        api
        .get('/curated?page=2&per_page=30', {
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
    return(
            <>
            <ButtonPagination className="buttons-top"/>
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
            <ButtonPagination className="buttons-down" />,
            </>
    );
}

export default Pagination;
