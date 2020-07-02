import ReactDOM from "react-dom";
import React, {useState, useEffect} from "react";
import {PlantList} from "./Components/PlantList";
import {PlantArticle} from "./Components/PlantArticle";
import {AddPlant} from "./Components/AddPlant";
import {AddUserPlant} from "./Components/AddUserPlantBetter";
import {Register} from "./Components/AddPlant2";
import {Header} from "./Components/Header";
import {Footer} from "./Components/Footer";
import {UserPlantDetail} from "./models/UserPlantDetail";


const App = () => {
    return (
            <>
            <Header/>
            <PlantArticle id={4}/>
            <Footer/>
            </>
       )
};

ReactDOM.render(<App/>, document.getElementById("app"));