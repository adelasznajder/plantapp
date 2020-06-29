import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";
import {PlantList} from "./Components/PlantList";
import {PlantArticle} from "./Components/PlantArticle";
import {AddPlant} from "./Components/AddPlant";
import {AddUserPlant} from "./Components/AddUserPlant";
import {Register} from "./Components/AddPlant2";


const App = () => <PlantArticle id={3}/>;

ReactDOM.render(<App />, document.getElementById("app"));