import React from 'react';
import Header from '../components/Header'
import Card from '../components/Card'
import Footer from '../components/Footer'
import './Album.sass';

const Album = () => {
    return(
        <div className = "container">
            <Header />
            <Card />
            <Footer />
        </div>
    );

}

export default Album;