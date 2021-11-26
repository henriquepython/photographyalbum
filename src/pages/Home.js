import React from 'react';
import Header from '../components/Header'
import AlbumView from '../components/Albumview'
import Footer from '../components/Footer'
import './Home.sass';


const Home = () => {
    return(
        <div className = "container">
            <Header />
            <AlbumView />
            <Footer />
        </div>
    );

}

export default Home;
