import React from 'react';
import Header from '../components/Header'
import AlbumView from '../components/Albumview'
import Footer from '../components/Footer'
import './Home.sass';


const Home = () => {
    return(
        <>
            <Header />
            <AlbumView />
            <Footer />
        </>
    );

}

export default Home;
