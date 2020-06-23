import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";
import {PlantList} from "./Components/PlantList";
import {PlantArticle} from "./Components/PlantArticle";


const App = () => <PlantList/>;

ReactDOM.render(<App />, document.getElementById("app"));