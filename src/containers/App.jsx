import React, {useState, useEffect} from 'react';
import '../assets/styles/App.scss';
import Header from '../components/Header'
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarosuelItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';

const API = 'http://localhost:3000/initalState/'

const App = () => {
    const initialState = useInitialState(API);
    
    return (
    <div className= 'App'>
        <Header/>
        <Search/>

        {initialState.myList?.length > 0 &&
            <Categories Title="Mi Lista">
                <Carousel>
                {initialState.mylist?.map(item =>
                <CarouselItem key={item.id} {...item}/>
                )}
                </Carousel>
            </Categories>
        }

        <Categories Title="Tendencias">
            <Carousel>
                {initialState.trends?.map(item =>
                <CarouselItem key={item.id} {...item}/>
                )}
            </Carousel>
        </Categories>

        <Categories Title="Originales de Platflix">
        <Carousel>
            {initialState.originals?.map(item =>
                    <CarouselItem key={item.id} {...item}/>
            )}
         </Carousel>

        </Categories>


        <Footer/>
    </div>
    );
}
export default App;