import React, { useState, useEffect } from 'react';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';
import api from '../../services/api.js'
import './Pagination.sass';


const Pagination = () => {
    const [user, setUser] = useState();

    useEffect(() => {
        api
        .get('/curated?page=2&per_page=10', {
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
        
            <div>
                {user?.map((item) => (
                    <img
                        
                        key = {item.id}
                        id={item.id}
                        title={item.photographer}
                        link={item.src['small']}
                        liker={item.liked}
                    />
                ))}
            </div>
           
    );
}

export default Pagination;
