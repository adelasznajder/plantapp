import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";
import {PlantList} from "./Components/PlantList";
import {PlantArticle} from "./Components/PlantArticle";
import {AddPlant} from "./Components/AddPlant";


const App = () => <AddPlant/>;

ReactDOM.render(<App />, document.getElementById("app"));