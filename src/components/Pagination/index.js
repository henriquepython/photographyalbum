import React, { useState, useEffect } from 'react';
import api from '../../services/api.js'
import './Pagination.sass';


const Pagination = () => {
    const [user, setUser] = useState();

    useEffect(() => {
        api
        .get('/photos/2014422', {
            headers: {
              Authorization: '563492ad6f91700001000001d717ba1d15da4f06bcc63b3eb177e0ba'
            }
           })
        .then((response) => setUser(response.data))
        .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });
    }, []);
    return(
        
            <div className = "pag"> <p>{JSON.stringify(user)}</p></div>
           
    );
}

export default Pagination;
