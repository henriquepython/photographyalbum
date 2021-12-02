import React from 'react';
import Header from '../components/Header'
import Pagination from '../components/Pagination'
import Footer from '../components/Footer'
import './Album.sass';

const Album = () => {
    return(
        <div className = "container1">
            <Header />
            <Pagination />
            <Footer />
        </div>
    );
}

export default Album;