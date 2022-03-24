import './PagHome.css'
import React from "react";

import Title from "../components/Title";
import AddCatVideo from '../components/AddCategoriaVideo';
import Categorias from '../components/Categorias';

const Home = () => {

    return (

        <div className="home">
            <Title/>
            <AddCatVideo/>
            <Categorias/>
        </div>

    )

}

export default Home