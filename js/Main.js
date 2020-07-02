
import React, {useState, useEffect} from "react";
import {Header} from "./Components/Header";
import {Footer} from "./Components/Footer";
import {PlantArticle} from "./Components/PlantArticle";
import {Register} from "./Components/AddPlant2";
import {AddUserPlant} from "./Components/AddUserPlantBetter";
import {PlantList} from "./Components/PlantList";
import {AllPlantList} from "./Components/AllPlants";

export const Main = () => {
    return (<>
            <Header/>
            <AllPlantList/>
            <Footer/>
        </>
    )
};